const Service = require('../../models/public/services.model');
const slugify = require('slugify');

exports.createServiceService = async (data) => {
  const { title } = data;

  const existingService = await Service.findOne({ title });
  if (existingService) {
    const error = new Error('Service already exists');
    error.statusCode = 400;
    throw error;
  }

  data.slug = slugify(title, { lower: true, strict: true });

  const service = await Service.create(data);
  return service;
};

exports.getAllServicesService = async () => {
  return await Service.find({ isActive: true }).sort({ createdAt: -1 });
};

exports.getServiceBySlugService = async (slug) => {
  const service = await Service.findOne({ slug, isActive: true });

  if (!service) {
    const error = new Error('Service not found');
    error.statusCode = 404;
    throw error;
  }

  return service;
};

exports.updateServiceService = async (id, data) => {
  if (data.title) {
    data.slug = slugify(data.title, { lower: true, strict: true });
  }

  const updatedService = await Service.findByIdAndUpdate(id, data, {
    returnDocument: 'after',
    runValidators: true,
  });

  if (!updatedService) {
    const error = new Error('Service not found');
    error.statusCode = 404;
    throw error;
  }

  return updatedService;
};

exports.deleteServiceService = async (id) => {
  const service = await Service.findByIdAndDelete(id);

  if (!service) {
    const error = new Error('Service not found');
    error.statusCode = 404;
    throw error;
  }

  return service;
};