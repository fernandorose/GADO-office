import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class Order extends Model {
  public id!: string;
  public userId!: string;
  public totalAmount!: number;
  public status!: string;
}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending", // Valor por defecto
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "order",
    timestamps: false,
  }
);

export default Order;
