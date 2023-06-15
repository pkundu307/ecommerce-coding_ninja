import mongoose from "mongoose";
//set schema for product
const productSchema = mongoose.Schema({
    name:String,
    quantity:Number
})

const Products=mongoose.model("product",productSchema)

export default Products