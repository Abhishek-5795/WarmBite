const { Router } = require("express");
const { authenticate } = require("../middlewares/authenticate.middleware");

const {
  addFoodToCart,
  removeFoodFromCart,
  getCartItems,
} = require("../controllers/cart.controller");
const router = Router();

router.patch("/add-to-cart", addFoodToCart);
router.patch("/remove-from-cart", removeFoodFromCart);
router.get("/get-cart", getCartItems);

module.exports = router;
