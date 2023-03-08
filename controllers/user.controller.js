const fs = require("fs");
module.exports.getRandomUser = (req, res) => {
  let data = JSON.parse(fs.readFileSync("./users.json"));
  const randomIndex = Math.floor(Math.random() * data.length);
  res.json(data[randomIndex]);
};

module.exports.getAllUser = (req, res) => {
  const { limit } = req.query;
  const data = JSON.parse(fs.readFileSync("./users.json"));
  limit ? res.json(data.slice(0, limit)) : res.json(data);
};

module.exports.postUserData = (req, res) => {
  //   console.log("-->",req.body);
  const data = JSON.parse(fs.readFileSync("./users.json"));
  const { id, gender, name, contact, address, photoUrl } = req.body;
  if (typeof (id) !== "number" ) {
    res.send("id & contact should be a number");
  }
  if(contact !== undefined && typeof (contact) !== "number"){
    res.send("contact should be a number");
  }
  if (id && gender && name && contact && address && photoUrl) {
    data.push({
      id: id,
      gender: gender,
      name: name,
      contact: contact,
      address: address,
      photoUrl: photoUrl,
    });
    fs.writeFileSync("./users.json", JSON.stringify(data));
    res.send("saved User Successfully");
  } else {
    res.send("Please provide all the data");
  }
};

module.exports.updateUserData = (req, res) => {
  //   console.log("-->",req.body);
  const data = JSON.parse(fs.readFileSync("./users.json"));
  const { id, gender, name, contact, address, photoUrl } = req.body;
  if (typeof (id) !== "number" ) {
    res.send("id  should be a number");
  }
  const filteredData = data.filter((user) => user.id !== id);
  let singleData = data.find((user) => user.id == Number(id));
  if (singleData) {
    singleData={...singleData,...req.body}
    filteredData.push(singleData);
    fs.writeFileSync("./users.json", JSON.stringify(filteredData));
    res.send("updated User Successfully");
  } else {
    res.send("Please provide all the data");
  }
};
module.exports.updateBulkUserData = (req, res) => {
    const data = JSON.parse(fs.readFileSync("./users.json"));
    req.body.forEach((element) => {
        if (typeof (element.id) !== "number") {
            res.send("id should be a number");
        }else if(element.contact !== undefined && typeof (element.contact) !== "number"){
            res.send("contact should be a number");
        }
    });
    try{
        const newArray = data.map((element) => {
          const matchingElement = req.body.find((el) => el.id === element.id);
          if (matchingElement) {
            return { ...element, ...matchingElement };
          }
          return element;
        });
      
          fs.writeFileSync("./users.json", JSON.stringify(newArray));
      res.send("Bulk User update Successful");
    }catch(err){
        console.log(err)
        res.send("Bulk User update Failed with",err.message);
    }
  
};
module.exports.removeUser=(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./users.json"));
    const { id } = req.body;
    if (typeof (id) !== "number") {
      res.send("id should be a number");
    }
    const filteredData = data.filter((user) => user.id !== id);
    fs.writeFileSync("./users.json", JSON.stringify(filteredData));
    res.send("User Deleted Successfully");
}