const Service = require("../../models/public/services.model");
const slugify = require("slugify");

/**
 * CREATE SERVICE
 */
exports.createServiceService = async (data) => {
  const { name, parent } = data;

  if (!name) {
    const error = new Error("Name is required");
    error.statusCode = 400;
    throw error;
  }

  // Generate slug
  const slug = slugify(name, { lower: true, strict: true });

  // Check duplicate by slug
  const existingService = await Service.findOne({ slug });
  if (existingService) {
    const error = new Error("Service already exists");
    error.statusCode = 400;
    throw error;
  }

  // Validate parent
  if (parent) {
    const parentExists = await Service.findById(parent);
    if (!parentExists) {
      const error = new Error("Parent service not found");
      error.statusCode = 400;
      throw error;
    }
  }

  data.slug = slug;

  return await Service.create(data);
};

/**
 * GET ALL SERVICES (ONLY ACTIVE)
 */
exports.getAllServicesService = async () => {
  return await Service.find({ isActive: true })
    .populate("parent")
    .sort({ createdAt: -1 })
    .lean();
};

/**
 * GET SERVICE BY SLUG
 */
exports.getServiceBySlugService = async (slug) => {
  const service = await Service.findOne({
    slug,
    isActive: true,
  })
    .populate("parent")
    .lean();

  if (!service) {
    const error = new Error("Service not found");
    error.statusCode = 404;
    throw error;
  }

  return service;
};

/**
 * UPDATE SERVICE
 */
exports.updateServiceService = async (id, data) => {
  // Check if service exists & active
  const existing = await Service.findOne({ _id: id, isActive: true });
  if (!existing) {
    const error = new Error("Service not found or inactive");
    error.statusCode = 404;
    throw error;
  }

  // Update slug if name changes
  if (data.name) {
    const slug = slugify(data.name, { lower: true, strict: true });

    // Check duplicate slug (excluding current)
    const duplicate = await Service.findOne({
      slug,
      _id: { $ne: id },
    });

    if (duplicate) {
      const error = new Error("Another service with same name exists");
      error.statusCode = 400;
      throw error;
    }

    data.slug = slug;
  }

  // Prevent self-parent
  if (data.parent && data.parent.toString() === id.toString()) {
    const error = new Error("Service cannot be its own parent");
    error.statusCode = 400;
    throw error;
  }

  // Validate parent
  if (data.parent) {
    const parentExists = await Service.findById(data.parent);
    if (!parentExists) {
      const error = new Error("Parent service not found");
      error.statusCode = 400;
      throw error;
    }
  }

  const updatedService = await Service.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedService;
};

/**
 * DELETE SERVICE (SOFT DELETE)
 */
exports.deleteServiceService = async (id) => {
  const service = await Service.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );

  if (!service) {
    const error = new Error("Service not found");
    error.statusCode = 404;
    throw error;
  }

  return service;
};