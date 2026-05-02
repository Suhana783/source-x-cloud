const { z } = require("zod");

// ObjectId validation (basic)
const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

// Item schema
const itemSchema = z
  .object({
    text: z.string().trim().optional(),
    icon: z.string().trim().optional(),
  })
  .refine((data) => data.text || data.icon, {
    message: "Item must have text or icon",
  });


const sectionSchema = z
  .object({
    type: z.enum([
      "hero",
      "introduction",
      "features",
      "industries",
      "why",
      "bottom",
    ]),
    title: z.string().trim().optional(),
    subtitle: z.string().trim().optional(),
    tagline: z.string().trim().optional(),
    content: z.string().trim().optional(),
    image: z.object({
      url: z.string().optional(),
      alt: z.string().optional(),
    }).optional(),
    items: z.array(itemSchema).optional(),
  })
  .refine(
    (data) =>
      data.title ||
      data.subtitle ||
      data.tagline ||
      data.content ||
      (data.items && data.items.length > 0),
    {
      message: "Section must have at least one content field",
    }
  );

const createServiceSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),

  parent: objectIdSchema.optional().nullable(),

  sections: z.array(sectionSchema).min(1, "At least one section required"),

  isActive: z.boolean().optional(),
});


const updateServiceSchema = z.object({
  name: z.string().trim().min(1).optional(),

  parent: objectIdSchema.optional().nullable(),

  sections: z.array(sectionSchema).optional(),

  isActive: z.boolean().optional(),
});

const idParamSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ID"),
})

module.exports = {
  createServiceSchema,
  updateServiceSchema
};