import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyBYiCRwewg_lsloAM-xWQNvv8-Yw6aEJVk',
  authDomain: 'auth-react-template.firebaseapp.com',
  projectId: 'auth-react-template',
  storageBucket: 'auth-react-template.appspot.com',
  messagingSenderId: '257454223447',
  appId: '1:257454223447:web:8b601869f1a806f08fb312'
});

export const auth = getAuth(app);

export default app;
