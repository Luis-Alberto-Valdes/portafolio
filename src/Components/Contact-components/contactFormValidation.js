import { z } from 'zod'

// Validate that name contains only letters (including accents), spaces and apostrophes
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/u

const contactSchema = z.object({
  nombre: z
    .string()
    .nonempty({ message: 'El nombre es requerido.' })
    .min(2, { message: 'El nombre es demasiado corto.' })
    .refine((val) => nameRegex.test(val), { message: 'El nombre solo puede contener letras y espacios.' }),

  email: z
    .string()
    .nonempty({ message: 'El email es requerido.' })
    .refine((v) => /^\S+@\S+\.\S+$/.test(v), { message: 'Ingrese una dirección de email válida.' }),

  mensaje: z
    .string()
    .nonempty({ message: 'El mensaje es requerido.' })
    .min(5, { message: 'El mensaje es demasiado corto.' })
    .max(2000, { message: 'El mensaje es demasiado largo.' })
    .refine((val) => !/<script\b[^>]*>([\s\S]*?)<\/script>/i.test(val), { message: 'El mensaje contiene contenido no permitido.' })
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
