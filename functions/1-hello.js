//domain/.netlify/functions/1-hello
const person = {
  name: 'John',
  lastname: 'petters',
  age: 30,
  src: { mainURL: 'https//www.google.com' },
};

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'First serverless function mmm',
  };
};
