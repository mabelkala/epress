const express = require("express")
const {addNewItem,getAllItems,getAnItem,deleteItem,updateItem}= require("../controllers/itemsController")
const router = express.Router();


router.route("/").post(addNewItem).get(getAllItems)
router.route("/:name").get(getAnItem)
router.route("/:_id").delete(deleteItem).put(updateItem);

module.exports = router;