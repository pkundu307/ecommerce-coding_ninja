import express from "express"
import {createProduct,deleteProduct,getAllProduct, updateQuantity} from "../controllers/product.js"

const router = express.Router();
//set product routes
router.post("/create",createProduct);
router.get("/",getAllProduct)
router.put("/update/:productId",updateQuantity)
router.delete("/delete/:productId",deleteProduct)

export default router;