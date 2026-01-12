import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles["form-container"]}>
          <div className={styles["form-toggle"]}>
            <button
              className={isLogin ? styles.active : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={!isLogin ? styles.active : ""}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
          {isLogin ? (
            <>
              <div className={styles.form}>
                <h2 className="text-2xl">Login Form</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <br />
                <p>
                  Not a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Signup now
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.form}>
                <h2 className="text-2xl">Signup Form</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Signup</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
