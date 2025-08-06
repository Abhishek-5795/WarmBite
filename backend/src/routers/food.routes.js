const { Router } = require("express");
const {
  addFood,
  getFoods,
  getSingleFood,
  deleteFood,
  updateFoodImage,
} = require("../controllers/food.controller");

const { upload } = require("../middlewares/multer.middleware");
const { authorize } = require("../middlewares/authorize.middleware");
const router = Router();

router.post("/add-food", authorize, upload.single("image"), addFood);

router.get("/all-foods", getFoods);

router.get("/food/:id", getSingleFood);

router.delete("/food/:id", authorize, deleteFood);

router.patch("/update-image/:id", authorize, upload.single("image"), updateFoodImage);

module.exports = router;
