module.exports = {
    attributes: {
          adresse: {
          type: 'string',
          required: true
          },
          code_postal: {
          type: 'string',
          minLength: 5,
          required: true
          },
          ville: {
          type: 'string',
          required: true
          },
          owner: {
          model: 'user'
          }
  }
};

