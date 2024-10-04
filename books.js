// basic Validation

const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("Mongoose connected successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');
}

const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,  //same as not null in sql
    },
    author:{
        type:String,
        maxlength:20,
    },
    price:{
        type:Number,
        //min:1,      //we can set a minimum price ,so that to avoid negative pricing
        //we can define our custom errors if its set to negative
        min:[1,"Price is too low for Selling in Amazon"],
    },
    discount:{
        type:Number,
        default:0,      //if we dont mention discount while creating a book , iy will fetch discount with its default value
    },
    genre:[String],     //[string] helps us to store array of genre here like family,drama,comedy
    category:{
        type:String,
        enum:["fictional","non-fictional"]  //by using enum , we can choose only specified catrgory
    },

});

const Book = mongoose.model("Books",bookSchema);

// const Book2 = new Book({
//     title:"Marvels",
//     author:"Stan lee",
//     price:2300,
//     genre:["adventure","Thrilling"],
//     category:"fictional"
// });

// Book2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


//Find by id and update
//Even tho we have set price min =1 , but in update ,we doesnt follow the validation in schema
// Book.findByIdAndUpdate("66ffc9d03a1d2a5499b5438d",{price:-100})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(errr);
// });


//To avoid this validation fail , we should pass argument run validator:true
Book.findByIdAndUpdate("66ffc9d03a1d2a5499b5438d",{price:-200},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});


//To get only the specific error message that we used in schema validation
//The general Synatax
//err.errors.category.properties.message