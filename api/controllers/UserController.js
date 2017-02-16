/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var path = require('path');

module.exports = {

    moncompte: function(req, res) {

    var data = {};
    var where = {id: req.user.id};

     User.findOne(where)
        .populate('adresses')
        .exec(function(error, user){
          console.log(user);
          data.user = user;
          return res.view('moncompte', data);
        });
     },

   uploadAvatar: function  (req, res) {

    var where = {id: req.user.id};

       req.file('avatar').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images/avatar')
       },function (err, files) {
         if (err)
           return res.serverError(err);

             User.Update(where)
                .populate('avatarurl')
                .exec(function(error, user){
                  console.log(user);
                  data.user = user;
                  return res.view('moncompte', data);
                });


         return res.json({
           message: files.length + ' file(s) uploaded successfully!',
           files: files
         });
       });
     }

};

