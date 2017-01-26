/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
     }
};

