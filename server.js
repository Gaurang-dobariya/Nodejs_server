require("dotenv").config()
let http = require("http")
let express = require("express")

let app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Index Page"
    })
})
app.get("/home", (req, res) => {
    res.status(200).json({
        message: "Home Page"
    })
})
app.get("/about", (req, res) => {
    res.status(200).json({
        message: "About Page"
    })
})
app.get("/product", (req, res) => {
    res.status(200).json({
        message: "Product Page"
    })
})
app.get("/contact", (req, res) => {
    res.status(200).json({
        message: "Contact Page"
    })
})

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server Started on ${process.env.PORT}`);
})