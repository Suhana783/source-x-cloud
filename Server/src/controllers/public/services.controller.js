const Service = require('../../models/public/services.model');
const slugify = require('slugify');

exports.createService = async (req, res) => {
  try {
    const { title, description, icon, features, image, isActive } = req.body;

    const existingService = await Service.findOne({ title });
    if (existingService) {
      return res.status(400).json({ success: false, message: 'Service already exists' });
    }

    const slug = slugify(title, { lower: true, strict: true });

    const service = new Service({
      title,
      slug,
      description,
      icon,
      features,
      image,
      isActive,
    });

    await service.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating service', error: error.message });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: services.length, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching services', error: error.message });
  }
};

exports.getServiceBySlug = async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug, isActive: true });

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching service', error: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { title } = req.body;
    if (title) req.body.slug = slugify(title, { lower: true, strict: true });

    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedService) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Service updated successfully',
      data: updatedService,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating service', error: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    res.status(200).json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting service', error: error.message });
  }
};