import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

interface CreateUserRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user." });
  }
};

export const createUser = async (
  req: CreateUserRequest,
  res: Response
): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    // Validar datos de entrada
    if (!name || !email || !password) {
      res.status(400).json({ message: "Todos los campos son obligatorios" });
      return;
    }

    // Verificar si el correo ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(409).json({ message: "El correo ya está registrado" });
      return;
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Devolver el nuevo usuario (sin la contraseña)
    res.status(201).json({
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params; // Asegúrate de que el email se pase en la URL, como en /users/:email
  const { password } = req.body; // Suponiendo que la contraseña se envía en el cuerpo de la solicitud

  try {
    // Buscar usuario por email
    const user = await User.findOne({ where: { email } });

    // Si no se encuentra el usuario
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Si todo es válido, devolver el usuario (puedes omitir la contraseña si lo deseas)
    return res
      .status(200)
      .json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
