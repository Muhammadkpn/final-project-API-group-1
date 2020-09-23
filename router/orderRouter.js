const router = require("express").Router()

// import controller
const {orderController} = require("../controller")

router.get("/get", orderController.getOrdersData)
router.get("/getByUserID/:id", orderController.getOrdersById)
router.get("/getByOrderNumber/:order_number", orderController.getOrdersByNumber)
router.get("/getByWarehouseID/:id", orderController.getOrdersByWarehouse)
router.get("/getByOrderStatus/:id", orderController.getOrdersByStatus)

module.exports= router