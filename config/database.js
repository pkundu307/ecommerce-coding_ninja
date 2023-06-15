import mongoose from "mongoose";


//set mongodb connection
const connectToDatabase = async () => {
    try {
      const url = 'mongodb+srv://pkundu308:pkundu307@cluster0.hrm7yl7.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB connection string and database name
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      };
  
      await mongoose.connect(url, options);
      console.log('Connected to database');
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
    }
  };
  export default connectToDatabase;