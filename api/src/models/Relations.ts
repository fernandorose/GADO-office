import User from "./User";
import Product from "./Product";
import Category from "./Category";
import Inventory from "./Inventory";
import Order from "./Order";
import OrderItem from "./OrderItem";
import Payment from "./Payment";

// Relaciones entre modelos
User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Product.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Product, { foreignKey: "categoryId" });

Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Order.hasOne(Payment, { foreignKey: "orderId" });
Payment.belongsTo(Order, { foreignKey: "orderId" });

Product.hasOne(Inventory, { foreignKey: "productId" });
Inventory.belongsTo(Product, { foreignKey: "productId" });

export { User, Product, Category, Inventory, Order, OrderItem, Payment };
