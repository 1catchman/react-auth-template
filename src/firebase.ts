import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  // Add your firebase app's config
});

export const auth = getAuth(app);

export default app;
