const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// const UserModel = require("../model/users.model");
const UserDB = mongoose.model("User");

exports.createUser = (req, res, next) => {
    console.log('hit--');
    // console.log(req.body);
    // var newuser = new UserDB();
    // newuser.email = req.body.email;
    // newuser.hash = req.body.password;
    // newuser.firstName = req.body.fname;
    // newuser.lastName = req.body.lname;

    // newuser.save();
    // res.send("User Registered Successfully");
    bcrypt.hash(req.body.password, 10).then(hash =>{
        console.log(req.body);
        var newuser = new UserDB({
        firstName:req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        hash: hash
    });
    newuser.save()
    .then(result => {
        console.log('pass--');
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        console.log('failed--', err);
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
    });
}

  exports.userLogin = (req, res, next) => {

  //   console.log(req.body);
  //   var email = req.body.email;
  //   var password = req.body.password;
    
  //   if (email && password) {
  //     UserDB.findOne({ email: email, hash: password }, function (err, user) {

  //         if (err) {
  //             console.log(err)
  //             res.status(500).send()
  //         }
  //         if (!user) {
  //             res.send("Either Username or Password is Incorrect")
  //         }
  //         else {
  //             console.log('--logged in');
  //             req.session.loggedin = true;
  //             req.session.email = email;
  //             // res.redirect('/home');
  //         }
  //     }
  //     )
  // }
  
  let fetchedUser;
  // console.log(req.body.email,req.body.password );
  UserDB.findOne({ email: req.body.email })
    .then(user => {
      console.log('hit login');
      console.log(user);
      if (!user) {
        console.log('no user');
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      console.log(user.password);
      return bcrypt.compare(req.body.password, user.hash);
    })
    .then(result => {
      console.log('pass--');
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email},
        "secret_this_should_be_longer_containigmanysymbolsandsfdtkvy uyuiy uyij",
        { expiresIn: "1h" }
      );
      console.log(token)
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        // userId: fetchedUser._id,
      });
      // res.redirect('/');
    })
    .catch(err => {
      console.log('auth error',err);
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });

}