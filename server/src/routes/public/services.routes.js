const express = require('express');
const {
  createService,
  getAllServices,
  getServiceBySlug,
  updateService,
  deleteService,
} = require('../../controllers/public/services.controller');

const router = express.Router();

router.post('/', createService);
router.get('/', getAllServices);
router.get('/:slug', getServiceBySlug);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;