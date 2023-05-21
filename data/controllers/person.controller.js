const Person = require('../models/person.model')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/') // specify the destination folder to store uploaded files
  }, 
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`) // specify the file name pattern for the uploaded files
  }
}) 
const upload = multer({ storage: storage })
const getAllPerson = (req, res) => {
    Person.find()
        .then(Persons => {
          console.log(Persons)
            res.send(Persons)
        }).catch(err => {
            console.log(err)
        })  
}
const getPersonById= async(req,res)=>{
  const {identity} = req.params;
    try {
      const userExist = await Person.findOne({identity:identity})
      console.log(identity)
      console.log(userExist)
       if(userExist==null)
            res.send('not valid');
        // const user = await Person.findById(user.id);
        else
           res.send(userExist);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Server error' });
      } 
}
const addPerson = (req, res) => {
    console.log('yes')
    const newPerson = new Person(req.body)
    newPerson.save()
        .then(Person => {
            res.send(Person)
        }).catch(err => {
            console.log(err)
        })
}
const addImage = async(req,res) => {
  const { id }=req.body
  try{
    if(req.file){//if we got an image
      const person = await Person.findById(id)
      person.image = req.file.filename;
      await person.save();
      res.send("Image updated successfully")
  } 
  else{
    res.send("there were no image")
  }
  }
  catch(err){
    res.status(500).send(err.message);
  }
}
const getImage = async(req,res) =>{
  const {id} = req.params
  try{
    const person = await Person.findById(id)
    if(person.image)
    res.sendFile(`/images/${person.image}`, {root: './'}) // send the file path of image stored in the 'images' folder
  }
  catch(err){
    res.status(500).send(err.message);
  }
}
// const uploadImage = async(req,res) =>{
//     const { userId } = req.body;
//     try {
//       const user = await User.findById(userId);
//       if (!user) {
//         return res.status(404).send("User not found");
//       }
//       if (req.file) {
//         // Delete old image if it exists
//         if (user.image) {
//           fs.unlinkSync("uploads/" + user.image);
//         }
//         // Save new image
//         user.image = req.file.filename;
//         await user.save();
//         res.send("Image uploaded successfully");
//       } else {
//         res.status(400).send("No image uploaded");
//       }
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
// }


module.exports = { getAllPerson,getPersonById, addPerson ,addImage: upload.single('image'),getImage}