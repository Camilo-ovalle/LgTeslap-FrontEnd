import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

// ?styles
import "../styles/login.css";

function Login() {
  const { handleSubmit, register } = useForm();
  const { logIn, isAuthenticated } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="formContainer">
        <form
          onSubmit={handleSubmit(async (values) => {
            logIn(values);
          })}
        >
          <div className="imgContainer">
            <img src="src/assets/User_Icon.webp" alt="" />
          </div>
          <div className="impsContainer">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
