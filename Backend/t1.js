expr=require("express")
app=expr()
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/form.html")
})

app.get("/hi",(req,res)=>{
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/psptask").then(()=>{console.log("Success")}).catch((err)=>{console.error("error che")})

const myschema=new mg.Schema({
    name:String, 
    pass:String, 
})
const person=new mg.model('man',myschema) 
const persondata=new person({ name:req.query.name,pass:req.query.pass, active:true})
persondata.save()
res.send()
})
app.listen(5889)