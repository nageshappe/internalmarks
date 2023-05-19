var express=require("express")
var app=express()
var mongoose=require("mongoose")
var students=require("./routes/students")
app.use(express.json())
app.use("/students",students)
  mongoose.connect("mongodb+srv://nageshf25:Ananya25@cluster0.ozvxqf0.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
       
        useUnifiedTopology: true
      }
      )
      const db=mongoose.connection
      db.on("error", console.error.bind(console, "connection error: "));
      db.once("open", function () {
        console.log("Connected successfully");
      });
app.listen(2000,()=>{
})
    console.log("Server started ")