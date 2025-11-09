const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const jobController = require('../controllers/jobController');
const auth = require('../middleware/auth');
const permit = require('../middleware/roles');

// public listing
router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJob);

// protected routes: employers or admin can create
router.post(
  '/',
  auth,
  permit(['employer', 'admin']),
  [body('title').notEmpty(), body('description').notEmpty()],
  jobController.createJob
);

// update
router.put('/:id', auth, permit(['employer', 'admin']), jobController.updateJob);

// delete
router.delete('/:id', auth, permit(['employer', 'admin']), jobController.deleteJob);

module.exports = router;
