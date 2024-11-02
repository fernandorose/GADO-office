import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class Category extends Model {
  public id!: string;
  public name!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "category",
    timestamps: false,
  }
);

export default Category;
