const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    check: {
        type: Boolean,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});
                                //apelido, modelo
module.exports = mongoose.model("Task", taskSchema);
