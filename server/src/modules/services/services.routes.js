const express = require('express');
const router = express.Router();

const {
  createService,
  getAllServices,
  getServiceBySlug,
  updateService,
  deleteService,
} = require('./services.controller');

const validate = require('../../middleware/validate.middleware');

const {
  createServiceSchema,
  updateServiceSchema,
} = require('./services.validator');

const { z } = require("zod");

// ID validation schema
const idParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ID"),
});

// ROUTES
router.post('/', validate(createServiceSchema), createService);

router.get('/', getAllServices);

router.get('/:slug', getServiceBySlug);

router.put(
  '/:id',
  validate(idParamSchema, "params"),
  validate(updateServiceSchema),
  updateService
);

router.delete(
  '/:id',
  validate(idParamSchema, "params"),
  deleteService
);

module.exports = router;