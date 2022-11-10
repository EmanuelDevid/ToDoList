const mongoose = require("mongoose");

const conectToDb = () => {
    mongoose
        .connect(
            "mongodb+srv://root:david100@todolist.rwepqty.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log("Conexão com o MongoDB Atlas bem sucedida!"))
        .catch((error) => console.log(error));
};

module.exports = conectToDb;
