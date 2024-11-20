import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase"; // Ensure this path is correct
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"; // Import the necessary functions
import googleIcon from "../assets/img/googleIcon.png"; // Adjust the path as necessary

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="login--email">
        <div className="login--email_text">Email</div>
        <div className="login--input_container">
          <input
            className="login--input"
            type="email"
            placeholder="Type your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="login--password">
        <div className="login--password_text">
          <div className="login--password_text_content">Password</div>
          <div className="login--password_text_forgot">Forgot password?</div>
        </div>
        <div className="login--input_container">
          <input
            className="login--input"
            type="password"
            placeholder="Type your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="login--buttons">
        <button onClick={signIn} className="login--button login--normal_login">Log in</button>
        <button onClick={signInWithGoogle} className="login--button login--login_with_google">
          <div className="login--google_icon">
            <img src={googleIcon} alt="Google icon" />
          </div>
          <div className="login--login_with_google_text">Login with Google</div>
        </button>
      </div>
    </div>
  );
};

export default Auth; // Export as default