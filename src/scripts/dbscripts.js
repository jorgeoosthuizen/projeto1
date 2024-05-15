import {ref} from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const auth = getAuth();
const isLogged = ref(localStorage.getItem('isLogged') === 'true');

export async function login(email,password) {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.valu);
      isLogged.value = true;
      router.push('/');
      location.reload()
    } catch (error) {
      console.error('Error logging in:', error.message);
      // debug line to make sure variables were passed for authentication
      // alert(email + '-' + password + );
      alert('Login failed. Please check your email and password.');
    }
  }
  