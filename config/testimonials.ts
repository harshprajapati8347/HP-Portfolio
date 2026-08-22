export type Testimonial = {
  quote: string
  author: string
  role?: string
  company?: string
}

/**
 * Add entries here to show the Testimonials section on the homepage.
 * The section is hidden automatically when this array is empty.
 */
export const testimonials: Testimonial[] = []
