import Products from "../models/products.js";
//queries
const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    let product = await Products.create({
      name,
      quantity,
    });

    res.status(200).json({
      success: true,
      message: "product created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not added",
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Products.find({}).exec();
    res.json({ status: 200, message: "all products ", products });
  } catch (error) {
    console.error("Error retrieving products", error);
    res.status(500).send("Error retrieving products");
  }
};
const updateQuantity= async (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
  
    try {
      const updatedProduct = await Products.findByIdAndUpdate(productId, { quantity }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).send('Product not found');
      }
  
      res.json({message:"updated successfully",updatedProduct});
    } catch (error) {
      console.error('Error updating product', error);
      res.status(500).send('Error updating product');
    }
  };
const deleteProduct=async(req,res)=>{
    const {productId}=req.params;
        
    try {
        const deletedProduct = await Products.findByIdAndRemove(productId);
    
        if (!deletedProduct) {
          return res.status(404).send('Product not found');
        }
    
        res.send('Product deleted successfully');
      } catch (error) {
        console.error('Error deleting product', error);
        res.status(500).send('Error deleting product');
      }
    };
export { createProduct, getAllProduct,updateQuantity ,deleteProduct};
