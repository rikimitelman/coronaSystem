const Person = require('../models/person.model')

const getAllPerson = (req, res) => {
    Person.find()
        .then(Persons => {
            res.send(Persons)
        }).catch(err => {
            console.log(err)
        })
}
const getPersonById= async(req,res)=>{
    try {
        const user = await Users.findById(req.params.id);
        res.send(user);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Server error' });
      }
}
const addPerson = (req, res) => {
    console.log('yess')
    const newPerson = new Person(req.body)
    newPerson.save()
        .then(Person => {
            res.send(Person)
        }).catch(err => {
            console.log(err)
        })
}
const uploadImage = async(req,res) =>{
    const { userId } = req.body;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }
      if (req.file) {
        // Delete old image if it exists
        if (user.image) {
          fs.unlinkSync("uploads/" + user.image);
        }
        // Save new image
        user.image = req.file.filename;
        await user.save();
        res.send("Image uploaded successfully");
      } else {
        res.status(400).send("No image uploaded");
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
}


module.exports = { getAllPerson,getPersonById, addPerson ,uploadImage}