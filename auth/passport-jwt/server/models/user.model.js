const mongoose = require("mongoose");

const userSchema = ({
    username: {
        type: String,
        require: true,
        uniquie: true,
    },
    password: {
        type: String,
        require: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User;