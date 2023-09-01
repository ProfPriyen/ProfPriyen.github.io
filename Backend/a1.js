//Establish a connection
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/psp2")
  .then(()=>{console.log("Success")})
  .catch((err)=>{console.error("error che")})
//Insert a record/document after creating collection
const myschema=new mg.Schema({
    name:{type:String,required:true}, //name must be given else error so written in {type:string,requires:true}
    surname:String,
    age:Number,
    active:Boolean,
    date:{type:Date,default:new Date()}
})
//mg.pluralize(null) //to avoid plural form of folder
const person=new mg.model('man',myschema)  //make name in plural form.. so name is singles instead of single 

//Insert values (data of table)
const persondata=new person({ name:"DDD",surname:"PQR2",  age:2,  active:true})
persondata.save()
// To add multiple data at once
const persondata2=new person({ name:"ABC2", surname:"PQR2",  age:2,  active:true})
persondata2.save()


// Allow to create table though data has error
const createdoc=async()=>
{
try 
    {
         const persondata=new person({  surname:"PQR2",  age:2,  active:true})
        const result=await persondata.save();
        console.log(result)
    }
catch(err){console.log("problem che")}
}
createdoc()