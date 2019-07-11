import { addNewDownload, getDownloads, getDownload, updateDownload, deleteDownload } from '../controllers/downloadController'
const { check, validationResult } = require('express-validator');

const routes = (app) => {
  app.route('/test')
    .get(getDownloads)
  // .post(addNewDownload)

  app.post('/test', [
    check('Firstname').isEmpty().trim(),
    check('Lastname').isEmpty().trim(),
    check('Email').isEmpty().trim(),
    check('Password').isLength({max : 8, min : 5}).isEmpty().trim(),
    check('ConformPassword').isEmpty().trim()
  ], addNewDownload, (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    Test.create({
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Email: req.body.Email,
      Password: req.body.Password,
      ConformPassword: req.body.ConformPassword
    }).then(test => res.json(test));
  });

  app.route('/test/:id')
    .get(getDownload)
    .put(updateDownload)
    .delete(deleteDownload)
}

export default routes;