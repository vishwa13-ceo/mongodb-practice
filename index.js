const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("Mongoose connected successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

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

User.findById("66fedfcc2a0fa34025f62eb0")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})