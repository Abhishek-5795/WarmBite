const userCollection = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/ErrorHandler");
const { generateToken } = require("../utils/jwt.utils");

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, password, phoneNumber, role } = req.body;

  let existingUser = await userCollection.findOne({ email });
  if (existingUser) throw new ErrorHandler("email already exists", 400);

  let newUser = await userCollection.create({ name, email, password, phoneNumber, role });

 

  res.status(201).json({
    success: true,
    message: "user registered successfully",
    data: newUser,
  });

});

const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  
  let existingUser = await userCollection.findOne({ email });
  if (!existingUser) throw new ErrorHandler("please register first", 400);

  let isMatched = await existingUser.comparePassword(password);
  if (!isMatched) throw new ErrorHandler("invalid password", 400);

  let token = await generateToken(existingUser._id, existingUser.tokenVersion);
  console.log(token);

  res.cookie("myCookie", token, {
    maxAge: 1 * 60 * 60 * 1000, 
    secure: true,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "user logged in successfully",
    token,
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("myCookie");

  await userCollection.updateOne({ _id: req.myUser._id }, { $inc: { tokenVersion: 1 } });

  res.status(200).json({
    success: true,
    message: "user logged out successfully",
  });
});

const deleteUserProfile = asyncHandler(async (req, res) => {
  const { _id } = req.myUser; 
  let deletedUser = await userCollection.findByIdAndDelete({ _id }); 
  
  res.status(200).json({
    success: true,
    message: "user deleted successfully",
    data: deletedUser,
  });
}); 


const updateUserProfile = asyncHandler(async (req, res) => {
  
  const { _id } = req.myUser; 
  const { name, email, phoneNumber } = req.body;

  const updatedUser = await userCollection.findByIdAndUpdate(
    { _id }, 
    {
      $set: { name, email, phoneNumber },
    },
    { new: true } 
  );

  
  res.status(200).json({
    success: true,
    message: "user updated successfully",
    data: updatedUser,
  });
});

const updateUserPassword = asyncHandler(async (req, res) => {
  let { newPassword } = req.body;

  let user = await userCollection.findById(req.myUser._id); 
  console.log(user);
  user.password = newPassword; 
  await user.save();

  res.status(200).json({
    success: true,
    message: "password updated successfully",
  });
});

const getLoggedInUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    userDetails: req.myUser,
  });
}); 

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  deleteUserProfile,
  getLoggedInUserProfile,
  updateUserProfile,
  updateUserPassword,
};
