import {db} from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const router = useRouter();
const auth = getAuth();

export async function login() {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      isLogged.value = true;
      router.push('/');
      location.reload()
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Login failed. Please check your email and password.');
    }
  }
  