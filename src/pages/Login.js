import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import styles from '../styles/login.module.css';
import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const auth = useAuth();
  console.log(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      setLoggingIn(false);
      return toast.error("Enter both email and password ");
    }

    const response = await auth.login(email, password);

    if (response.success) {
      toast.success('Successfully logged in');
    } else {
      toast.error(response.message);
    }

    setLoggingIn(false);
  };
  if (auth.user) {
    return <Navigate to="/" />;
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Paasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? 'Logging in...' : 'Log In'}
        </button>
      </div>
      < ToastContainer />
    </form>
    
  );
};

export default Login;