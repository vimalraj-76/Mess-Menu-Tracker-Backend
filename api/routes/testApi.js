// This is a Node.js Express router that listens for HTTP POST requests on the root path ('/') and expects the request body to contain a JSON object with the properties 'hostel', 'day', and 'meal'. 
// It then searches a MongoDB collection named 'menuDatabase' for a document that matches those properties, and returns a JSON object with the 'food', 'complementary1', and 'complementary2' properties of the matching document in the response.
// If there is an error during the search, it sends a 500 error response.

// var express=require('express');
// const mongoose=require('mongoose');
// const fs = require('fs');
// const path = require('path');
// const menuFilePath = path.join(__dirname, 'menu.json');
// const jsonData = fs.readFileSync(menuFilePath);
// const data = JSON.parse(jsonData);
// const MyData = require('../models/user');
// //const password = encodeURIComponent('Vimalraj#8608');
// var router=express.Router();
// mongoose.connect(process.env.MONGODB_URI,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(()=>console.log("Connected!"));

// try {
//   MyData.insertMany(data);
//   console.log('Data inserted successfully');
//   } catch (error) {
//   console.log(error);
//   }
// router.post('/',(req,res,next)=>
// {
//     const hostel_ = req.body.hostel;
//     const day_ = req.body.day;
//     const meal_ = req.body.meal;
//     MyData.find({hostel:hostel_,day:day_,meal:meal_}).then((result)=>{res.status(200).json({"food":result[0].food,"complementary1":result[0].complementary1,"complementary2":result[0].complementary2})}).catch((error) => {
//         console.log(error);
//         res.status(500).send('Error retrieving data');
//       });
// });
// module.exports=router;

// var express=require('express');
// const mongoose=require('mongoose');
// const fs = require('fs');
// const path = require('path');
// const menuFilePath = path.join(__dirname, 'menu.json');
// const jsonData = fs.readFileSync(menuFilePath);
// const data = JSON.parse(jsonData);
// const MyData = require('../models/user');
// //const password = encodeURIComponent('Vimalraj#8608');
// var router=express.Router();
// mongoose.connect(process.env.MONGODB_URI,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(()=>console.log("Connected!")).catch((error) => {
//   console.log(error);
// });
// try {
//   MyData.insertMany(data);
//   console.log('Data inserted successfully');
// } catch (error) {
//   if (error && error.writeErrors && error.writeErrors.length) {
//     console.log(error.writeErrors);
//   } else {
//     console.log(error);
//   }
// }

// router.post('/',(req,res,next)=>
// {
//     const hostel_ = req.body.hostel;
//     const day_ = req.body.day;
//     const meal_ = req.body.meal;
//     MyData.find({hostel:hostel_,day:day_,meal:meal_}).then((result)=>{res.status(200).json({"food":result[0].food,"complementary1":result[0].complementary1,"complementary2":result[0].complementary2})}).catch((error) => {
//         console.log(error);
//         res.status(500).send('Error retrieving data');
//       });
// });
// module.exports=router;


var express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const menuFilePath = path.join(__dirname, 'menu.json');
const jsonData = fs.readFileSync(menuFilePath);
const data = JSON.parse(jsonData);
const MyData = require('../models/user');
var router = express.Router();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Atlas connected"))
  .catch((error) => console.log("MongoDB Atlas could not connect: ", error));

  try {
    MyData.insertMany(data);
    console.log('Data inserted successfully');
    } catch (error) {
    console.log(error);
    }

router.post('/', (req, res, next) => {
  const hostel_ = req.body.hostel;
  const day_ = req.body.day;
  const meal_ = req.body.meal;
  MyData.find({ hostel: hostel_, day: day_, meal: meal_ }).then((result) => {
    res.status(200).json({ "food": result[0].food, "complementary1": result[0].complementary1, "complementary2": result[0].complementary2 });
  }).catch((error) => {
    console.log(error);
    res.status(500).send('Error retrieving data');
  });
});

module.exports = router;
