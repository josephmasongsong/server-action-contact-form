import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  phone: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(10),
});
