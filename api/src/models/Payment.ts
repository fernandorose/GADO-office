import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";
import Order from "./Order";

class Payment extends Model {
  public id!: string;
  public orderId!: string;
  public amount!: number;
  public method!: string;
  public status!: string;
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Payment",
    tableName: "payment",
    timestamps: false,
  }
);

export default Payment;
