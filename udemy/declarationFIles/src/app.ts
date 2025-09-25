import { add } from "./calculator.js";
import { AdminUser } from "./user.js";

const userAdmin = new AdminUser();
userAdmin.createUser("Bob");
userAdmin.showGreeting();

console.log(add(1, 12));