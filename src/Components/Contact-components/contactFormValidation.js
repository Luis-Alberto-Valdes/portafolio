import { z } from 'zod'

// Validate that name contains only letters (including accents), spaces and apostrophes
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/u

const contactSchema = z.object({
  nombre: z
    .string()
    .nonempty({ message: 'Name is required.' })
    .min(2, { message: 'Name is too short.' })
    .refine((val) => nameRegex.test(val), { message: 'Name can only contain letters and spaces.' }),

  email: z
    .string()
    .nonempty({ message: 'Email is required.' })
    .refine((v) => /^\S+@\S+\.\S+$/.test(v), { message: 'Enter a valid email address.' }),

  mensaje: z
    .string()
    .nonempty({ message: 'Message is required.' })
    .min(5, { message: 'Message is too short.' })
    .max(2000, { message: 'Message is too long.' })
    .refine((val) => !/<script\b[^>]*>([\s\S]*?)<\/script>/i.test(val), { message: 'Message contains disallowed content.' })
})

/**
 * Valida datos del formulario de contacto.
 * @param {{ nombre: string, email: string, mensaje: string }} data
 * @returns {{ success: boolean, data?: object, errors?: Record<string,string> }}
 */
function validateContact (data) {
  const result = contactSchema.safeParse(data)
  if (result.success) return { success: true, data: result.data }

  const errors = {}
  // Zod puede exponer las issues como `errors` o `issues` según la versión.
  const issues = (result.error && (result.error.errors || result.error.issues)) || []
  if (Array.isArray(issues)) {
    issues.forEach((err) => {
      const key = err.path && err.path.length ? String(err.path[0]) : '_form'
      // Sólo guardar el primer mensaje por campo
      if (!errors[key]) errors[key] = err.message || String(err)
    })
  }

  return { success: false, errors }
}

export { contactSchema, validateContact }
