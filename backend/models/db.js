const mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect(`mongodb+srv://jehad:102030jj@cluster0.rjccfoj.mongodb.net/jehaddatabase?retryWrites=true&w=majority`).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
