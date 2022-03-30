const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rpraju16:rpraju16@cluster0.1zie0.mongodb.net/firstDB?retryWrites=true&w=majority"
  );
};

module.exports = connect;
