module.exports.policies = {

   '*': true,

  'PostController': {
    '*': 'isAuthenticated'
  },

  'UserController': {
      'moncompte': 'isAuthenticated'
    },

};
