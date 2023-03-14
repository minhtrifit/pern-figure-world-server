var express = require("express");
var router = express.Router();
const HomeController = require("../controller/home.controller.js");

router.get("/", HomeController.getConnectServer);

// User API
router.get("/users", HomeController.getAllUsers);
router.get("/users/:email", HomeController.getTargetUser); // Get target User by email
router.post("/status", HomeController.changeUserStatus); // User login event handle: {email, uid, displayName, photoURL}
router.delete("/users/delete", HomeController.deleteUserByEmail);

// Product API
router.get("/products", HomeController.getAllProducts);
router.get("/products/:id", HomeController.getProductById); // Get product id with router params
router.get("/products/search/:key", HomeController.searchProduct); // Get product name with router params

// Cart API
router.get("/carts", HomeController.getAllCarts);
router.get("/carts/:email", HomeController.getTotalCartByUserEmail); // Get all order of 1 user
router.post("/carts/confirm", HomeController.confirmCart); // Create new order (1 order inclues many products)

// Post API
router.get("/posts", HomeController.getAllPosts);

module.exports = router;
