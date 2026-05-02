const { z } = require('zod');

const topicSchema = z.object({
  heading: z.string(),
  content: z.string()
});

const moduleSchema = z.object({
  title: z.string(),
  description: z.string(),
  topics: z.array(topicSchema)
});

const curriculumSchema = z.object({
  description: z.string(),
  modules: z.array(moduleSchema)
});

const whyChooseUsSchema = z.object({
  title: z.string(),
  description: z.string(),
  points: z.array(
    z.object({
      heading: z.string(),
      description: z.string()
    })
  )
});

//  Create Course Validation
const createCourseSchema = z.object({
  title: z.string(),
  shortDescription: z.string(),
  fullDescription: z.string(),

  highlights: z.array(z.string()),
  prerequisites: z.array(z.string()),

  image: z.string(),
  duration: z.string(),

  mode: z.enum(["online", "offline", "hybrid"]),
  certificate: z.boolean(),

  curriculum: curriculumSchema,

  relatedCourses: z.array(z.string()),

  whyChooseUs: z.array(whyChooseUsSchema)
});


//  Update Course Validation (all optional)
const updateCourseSchema = z.object({
  title: z.string().optional(),
  shortDescription: z.string().optional(),
  fullDescription: z.string().optional(),

  highlights: z.array(z.string()).optional(),
  prerequisites: z.array(z.string()).optional(),

  image: z.string().optional(),
  duration: z.string().optional(),

  mode: z.enum(["online", "offline", "hybrid"]).optional(),
  certificate: z.boolean().optional(),

  curriculum: curriculumSchema.optional(),

  relatedCourses: z.array(z.string()).optional(),

  whyChooseUs: z.array(whyChooseUsSchema).optional()
});

module.exports = {
  createCourseSchema,
  updateCourseSchema
};