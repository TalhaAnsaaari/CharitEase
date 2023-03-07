const router = require("express").Router()
var db = require('../config/dbConnection')
const { getAllItemsOnDonation, getRequestStatusForItem, requestForItem, getAllRequestedItems } = require("../controllers/needyController")

router.post('/getAllItemsOnDonation', getAllItemsOnDonation)
router.post('/getAllRequestedItems', getAllRequestedItems)

router.post('/item/requestStatus', getRequestStatusForItem)
router.post('/item/addRequest', requestForItem)


module.exports = router