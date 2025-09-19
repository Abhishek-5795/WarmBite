
<h1> <u> Food Delivery Backend API </u> </h1> 
<br>

## Introduction
This project contains the backend API for a food delivery website, designed to provide a foundation for frontend applications.
The API's present here handles user management, food management, order management, and cart services.
<br>

## Setup
To use this backend API, follow these steps:

### Installation
1. Clone the repository: `git clone https://github.com/Abhishek-5795/WarmBite.git`
2. Move to the root directory and create an `.env file` with the following variables:
   - `PORT` assign the port no here
   - `MONGODB_URL` assign mongoDB uri here
   - `JWTKEY` assign the jwt secret key
   - assign the value of following variables from cloudinary api details:
      - `CLOUDINARY_API_SECRET`
      - `CLOUDINARY_API_KEY`
      - `CLOUDINARY_CLOUD_NAME`
   -  assign the value of following variables from stripe api details:
      - `STRIPE_SECRET_KEY`
4. Open an integrated terminal in the root directory then
   - Install dependencies: `npm install` or `npm i`
   - Start the server: `npm start`

<br>

## Api Endpoints
### User Management
- `POST /users/v1/register`: register a new user account
- `POST /users/v1/login`: login to user account
- `POST /users/v1/logout`: logout from the current session
- `GET /users/v1/delete-me`: delete user acount
- `GET /users/v1/me`: get account details
- `PATCH /users/v1/update-me`: update user details
- `PATCH /users/v1/update-password`: update user password

for detailed description about the request body of above api, consider the following api docks link:
https://documenter.getpostman.com/view/44246612/2sB3HrkHRz

<br>

### Food Management
- `POST /foods/v1/add-food`: register a new food
- `GET /foods/v1/food/{food-id}`: delete a food from the menu
- `GET /foods/v1/all-foods`: get all food menu
- `GET /foods/v1/food/{food-id}`: get a particular food from menu
- `PATCH /foods/v1/update-image/{food-id}`: update food image

for details about the request body of the above api, consider the following api docks link:
https://documenter.getpostman.com/view/44246612/2sB3HrkcJc

<br>

### Order Management
- `POST /orders/v1/create-order`: create a new order
- `GET /orders/v1/get-orders`: get details of all orders done by a user
- `GET /orders/v1/all-orders`: get details of all orders
- `PATCH /orders/v1/verify-order?orderId={order-id}&success=true`: verify an order
- `PATCH /orders/v1/update-order-status/{order-id}`: update the status of an order

for details about the request body of the above api, consider the following api docks link:
https://documenter.getpostman.com/view/44246612/2sB3HrkcJf

<br>

### User's Cart Services
- `GET /cart/v1/get-cart`: get cart items
- `PATCH /cart/v1/add-to-cart`: Add a food item to user's cart
- `PATCH /cart/v1/remove-from-cart`: Remove a food item from the user's cart

for details about the request body of the above api, consider the following api docks link:
https://documenter.getpostman.com/view/44246612/2sB3HrkHWQ
