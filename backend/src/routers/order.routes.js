const { Router } = require("express");
const {
  placeOrder,
  verifyOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
} = require("../controllers/order.controller");
const { authorize } = require("../middlewares/authorize.middleware");

const router = Router();

router.post("/create-order", placeOrder);
router.patch("/verify-order", verifyOrder);
router.get("/get-orders", getOrders);

router.patch("/update-order-status/:id", authorize, updateOrderStatus);
router.get("/all-orders", authorize, getAllOrders);

module.exports = router;
