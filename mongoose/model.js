module.exports = (function() {
  const mongoose = require("mongoose");
  const URI = "dkim0401.mooo.com:7727"; // your mongodb uri
  const DB = "mongodb"; // your db

  const db = mongoose.connection;
  db.on("error", console.error);
  db.once("open", function() {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
  });

  mongoose.connect(`mongodb://${URI}/${DB}?authSource=admin`, {
    useNewUrlParser: true,
    user: "april",
    pass: "04012548"
  });

  const schema = {};
  const model = {};

  schema.Post = require("./schema/post")(mongoose);
  schema.User = require("./schema/user")(mongoose);

  for (let k in schema) {
    model[k] = mongoose.model(k, schema[k]);
  }

  return model;
})();
