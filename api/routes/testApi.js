// This is a Node.js Express router that listens for HTTP POST requests on the root path ('/') and expects the request body to contain a JSON object with the properties 'hostel', 'day', and 'meal'. 
// It then searches a MongoDB collection named 'menuDatabase' for a document that matches those properties, and returns a JSON object with the 'food', 'complementary1', and 'complementary2' properties of the matching document in the response.
// If there is an error during the search, it sends a 500 error response.

var express=require('express');
const mongoose=require('mongoose');
var router=express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/Mess-Menu-Predictor').then(()=>console.log("Connected!"));
const myDataSchema = new mongoose.Schema({
    item: Number,
    day: String,
    hostel: String,
    meal:String,
    complementary1:String,
    complementary2:String,
    food:String,
  },{collection:'menuDatabase'});
  const MyData = mongoose.model('MyData', myDataSchema);
router.post('/',(req,res,next)=>
{
    const hostel_ = req.body.hostel;
    const day_ = req.body.day;
    const meal_ = req.body.meal;
    MyData.find({hostel:hostel_,day:day_,meal:meal_}).then((result)=>{res.status(200).json({"food":result[0].food,"complementary1":result[0].complementary1,"complementary2":result[0].complementary2})}).catch((error) => {
        console.log(error);
        res.status(500).send('Error retrieving data');
      });
});
module.exports=router;