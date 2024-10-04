const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("Mongoose connected successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//This is called Model
const userSchema = new  mongoose.Schema({
    name : String,
    eamil : String,
    age : Number,

});

const User = new mongoose.model("User",userSchema);
// const User = new mongoose.model("Employee",userSchema);

// const user1 = new User({
//     name :"vishwa",
//     email :"vishwa@gmail.com",
//     age:25
// })

// user1
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//To insert many users
// User.insertMany([
//     {name:"akash",email:"akash@yahoo.com",age:28},
//     {name:"kiran",email:"kiran@gmail.com",age:19},
//     {name:"archana",email:"archana@yahoo.com",age:29}
// ]).then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// })

//To find ,there are many like findOne ,findmany
// User.findById("66fedfcc2a0fa34025f62eb0")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// //To update one 
// User.updateOne({name:"archana"},{name:"vrushali"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//To findOne and update
//This will print vrushali old age in console , but in database it will updated
//beacause here it will first find and print ,then updated
// User.findOneAndUpdate({name:"vrushali"},{age:20})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// //By adding new:true in argument , you will be printed with updated one 
// User.findOneAndUpdate({name:"vrushali"},{age:19},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//To delete User
//There are methods like deleteMany, findOneAndDelete , findByIdAndDelete
User.deleteOne({name:"vrushali"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});




