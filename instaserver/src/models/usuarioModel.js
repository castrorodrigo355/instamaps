const {Schema, mongoose} = require("../database/database");
var userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true},
    admin: { type: Boolean, required: true},
})

var User = mongoose.model("User", userSchema)

module.exports = User