const express = require('express')
const mongoose = require('mongoose')
const { productAllowedUpdates } = require('./constants/allowedUpdates')
const serverResponse = require('./utils/serverResponse')
const cors = require('cors')
const app = express()

/* מאזין למשתנה סביבה */
require("dotenv").config()
//הגדרה של mongos 
app.use(express.json())
app.use(express.static("client/build"))
app.use(cors())
//MODEL
//מגדיר תבנית לקריאה לשרת 
const productSchema = new mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    // user:{type: Schema.Types.ObjectId, ref: 'User'} 
});
// const userSchema = new mongoose.Schema({
//     firstname: {type: String, required:true},
//     lastname: {type: String, required:true},
//     age:{type: Number, required:true},
//     email: {type: String, required:true},
//     profilePic: {type: String, required:true}
// });

// const User = mongoose.model("User", userSchema)
// לאחר תבנית מיציר מודל לmongos 
const Product = mongoose.model("Product", productSchema);

//ROUTES

app.get("/api/products", async (req, res) => {
    try {
        const allProducts = await Product.find({})
        return serverResponse(res, 200, allProducts)
    } catch (e) {
        return serverResponse(res, 500, { message: "internal error occured" + e })
    }
})

app.get("/api/product/:productId", async (req, res) => {
    try {
        const productId = req.params.productId //  מגדיר את המיקום לערך לפי התבנית url
        const product = await Product.findOne({ _id: productId }) //מבצעה חיפןש האים קיים ומכניס את הערך בסוגריים  
        return serverResponse(res, 200, product)
    } catch (e) {
        return serverResponse(res, 500, { message: "internal error occured" + e })
    }
})

// fetch('/api/products/jewellery')

app.get("/api/products/:category", async (req, res) => {
    try {
        const category = req.params.category
        const product = await Product.find({ category })
        return serverResponse(res, 200, product)
    } catch (e) {
        return serverResponse(res, 500, { message: "internal error occured" + e })
    }
})

app.post("/api/products", async (req, res) => {
    try {
        const product = new Product({ ...req.body }) // מהתחיל משתנה חדש שמקבל את התבנית של המודול 
        await product.save() //מבצעה שמירה למתודה 
        return serverResponse(res, 200, product)
    } catch (e) {
        return serverResponse(res, 500, { message: "internal error occured" + e })
    }
})

app.delete("/api/product/:productId", async (req, res) => {
    try {
        const productId = req.params.productId
        const product = await Product.findOneAndDelete({ _id: productId }) // לאחר שמצאה מבצעה מחיקה 
        return serverResponse(res, 200, product)
    } catch (e) {
        return serverResponse(res, 500, { message: "internal error occured" + e })
    }
})

app.put("/api/product/:productId", async (req, res) => {
    const productId = req.params.productId
    // מקבל את המפתח של אוביקט 
    const updates = Object.keys(req.body);
    //בודק האם שדות שנתנות לעידכון 
    const isValidOperation = updates.every((update) =>
        productAllowedUpdates.includes(update));

    if (!isValidOperation) {// בודק לפי משתנה הגדרות האם הערכים נתנים לעריכה 
        return serverResponse(res, 400, { message: "Invalid updates" });
    }

    try {
        const product = await Product.findOne({ _id: productId })
        if (!product) {  //בודק האים קיים ערך כזה בשרת נתונים 
            return serverResponse(res, 404, { message: "product does not exist" });
        }
        updates.forEach((update) => (product[update] = req.body[update]));
        await product.save();
        return serverResponse(res, 200, product);
    } catch (err) {
        return serverResponse(res, 500, {
            message: "Internal error while trying to update user",
        });
    }
})



//בניתוב לא מוגדר אז מבצעה פעולה זאת 
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html")
})

// הגדרה של  mongose 
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

// מזין לפורט במחשב לשרת 
app.listen(8000, () => {
    console.log('Server running at http://127.0.0.1:8000/');
})