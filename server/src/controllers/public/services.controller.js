const serviceService = require('../../services/public/services.service');
const asyncHandler = require('../../Utility/asyncHandler');

exports.createService = asyncHandler(async (req, res) => {
  const service = await serviceService.createServiceService(req.body);

  res.status(201).json({
    success: true,
    message: 'Service created successfully',
    data: service,
  });
});

exports.getAllServices = asyncHandler(async (req, res) => {
  const services = await serviceService.getAllServicesService();

  res.status(200).json({
    success: true,
    count: services.length,
    data: services,
  });
});

exports.getServiceBySlug = asyncHandler(async (req, res) => {
  const service = await serviceService.getServiceBySlugService(req.params.slug);

  res.status(200).json({
    success: true,
    data: service,
  });
});

exports.updateService = asyncHandler(async (req, res) => {
  const updatedService = await serviceService.updateServiceService(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    message: 'Service updated successfully',
    data: updatedService,
  });
});

exports.deleteService = asyncHandler(async (req, res) => {
  await serviceService.deleteServiceService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Service deleted successfully',
  });
});