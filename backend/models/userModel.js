const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have name'],
  },
  email: {
    type: String,
    // required: [true, 'User must have email address'],
    unique: true,
  },
  // password: {
  //   type: String,
  //   required: [true, 'User must have password'],
  // },
})

userSchema.statics.findOrCreate = function findOrCreate(profile, cb) {
  var userObj = new this()
  this.findOne({ email: profile._json.email }, function (err, result) {
    if (!result) {
      console.log(profile)
      userObj.name = profile._json.name
      userObj.email = profile._json.email
      //....
      userObj.save(cb)
    } else {
      cb(err, result)
    }
  })
}

const User = mongoose.model('User', userSchema)

module.exports = User
