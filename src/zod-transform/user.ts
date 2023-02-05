import { z } from 'zod';

export type User = z.infer<typeof User>;
export const User = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
