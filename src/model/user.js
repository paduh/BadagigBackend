import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String, default: "",
  lastname: String, default: "",
  username: String, default: "",
  email: String, default: "",
  phonenumber: Number, default: "",
  profilepicurl: String, default: "",
  availabity: String, default: "",
  skills: String, default: "",
  education: String, default: "",
  certification: String, default: "",
  passwordresetToken: String,
  tokenexpiration: String
});

module.exports = mongoose.model('User', userSchema);
