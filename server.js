var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3002;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/apiRoutes"))
app.use(require("./routes/viewRoutes"))

// require("./routes/apiRoutes")(app);
// require("./routes/viewRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, function() {
  console.log(`Server is now listening on port: ${PORT}`);
});