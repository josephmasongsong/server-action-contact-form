'use server';
import { formSchema } from '@/lib/schema';

export async function sendMessage(prevState: {}, formData: FormData) {
  try {
    const validated = formSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    });

    if (validated.success) {
      await fetch('https://formspree.io/f/mwkdydll', {
        body: JSON.stringify(validated.data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      return {
        success: true,
        message: 'Your message sent successfully.',
      };
    } else {
      throw new Error('Something went wrong with your submission.');
    }
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
}
