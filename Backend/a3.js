const mg=require("mongoose")
const b = require("validator")
mg.connect("mongodb://127.0.0.1:27017/psp2")
.then(()=>{console.log("Success")})
.catch((err)=>{console.error("error che")})
const myschema=new mg.Schema({
    name:{type:String,required:true,unique:true,lowercase:true,trim:true,minlength:[3,"Min length must be 3"],
    maxlength:[7,"max length must be 7"],
    enum:["abc","xyz","pqr"]}, //name must be given else error so written in {type:string,requires:true} 
 age:{type:Number,validate(v){ if(v<=0){
    throw new error("msg")}}}
 
})

 const person=new mg.model("validate",myschema)
 const persondata=new person({ name:"ttt",  age:2,  active:true})

persondata.save()

// email:{type:String, validate(val)
// {if(!b.isEmail(val)){throw new error("Enter valid email")}}
// }})
// const person = new mg.model("email",myschema)
// const persondata=new person({email:"priyen@gmail.com"})
// persondata.save()