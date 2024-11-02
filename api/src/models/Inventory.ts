import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";
import Product from "./Product";

class Inventory extends Model {
  public id!: string;
  public productId!: string;
  public quantity!: number;
}

Inventory.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Inventory",
    tableName: "inventory",
    timestamps: false,
  }
);

export default Inventory;
