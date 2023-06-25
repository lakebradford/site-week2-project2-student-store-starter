const app = require("./app")
const port = process.env.PORT || 3001
const productRouter = require("./Routes/products")
//NEED TO DO ** mount the code **//

app.use("/store", productRouter)




app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
})
