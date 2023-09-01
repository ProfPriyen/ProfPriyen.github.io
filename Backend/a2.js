const mg=require("mongoose")

mg.connect("mongodb://127.0.0.1:27017/psp2")
.then(()=>{console.log("Success")})
.catch((err)=>{console.error("error che")})

const myschema=new mg.Schema({
    name:{type:String,required:true}, //name must be given else error so written in {type:string,requires:true}
    surname:String,
    age:Number,
    active:Boolean,
    
})

const person=new mg.model("play",myschema)

const createDoc = async() => {
    try{
        const personData=new person({name:"ABCD", surname:"PQR", age:5, active:true})

        const personData1=new person({name:"XYZQ", surname:"PQRTT", age:10, active:true})
               
        const personData3=new person({name:"ABWECD", surname:"PQ", age:50, active:true})
              
const result = await person.insertMany([personData,personData1,personData3]);
  console.log(result);
            }
                catch(err){console.log("problem che")}
        }   
            
createDoc()

//  To Update  database

const updateDoc=async(_id)=>{
  try { const result=await person.findByIdAndUpdate({_id},
        {
            $set:
            {
                name:"rechanged5",            
            }},               
            {
                new:true
            }
        
    )
console.log(result)
        }
catch(err){console.log("problem che")}
    }
updateDoc("64dc9542f0a574503a50726e")   

  

// const getData=async()=>
// {
//     const res=await person.find().sort({name:1});
// // const res=await person.find().select({surname:"PQR"});
// // const res=await person.findOne();
// // const res=await person.findOne().limit(1);
// // const res=await person.find().sort({name:-1}).count();
// // const res=await person.find().sort({surname:-1}).count();
// // const res=await person.find().sort({name:1});
//     console.log(res);
// }
// getData();        