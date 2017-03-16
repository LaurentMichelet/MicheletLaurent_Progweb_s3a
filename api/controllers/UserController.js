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
          //console.log(user);
          data.user = user;
          return res.view('moncompte', data);
        });
     },

   uploadAvatar: function  (req, res) {

       req.file('avatar').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images/avatar')
       },function (err, files) {
         if (err) {return res.serverError(err);}


             console.log(path);
             User.update({id: req.user.id, avatarurl: path.basename(files[0].fd)})
                .exec(function(error, user){
                  console.log(error);
                  console.log(user);
                  var data = {};
                  data.user = user;
                  return res.json({
                             message: files.length + ' file(s) uploaded successfully!',
                             files: files
                  });
                });


       });
     }

};

