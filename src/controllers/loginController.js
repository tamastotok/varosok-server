module.exports = async function login_user(req, res) {
  const randomId = Math.random().toString(36).substr(2, 9);
  const randomName = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);

  if (!req.body.email) return res.status(400).send('Email required!');
  if (!req.body.password) return res.status(400).send('Password required!');

  res.send({
    _id: randomId,
    name: randomName,
    email: req.body.email,
  });
};
