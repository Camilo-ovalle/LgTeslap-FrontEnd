import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/appContext.jsx";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

import "../styles/register.css";
function Register() {
  const { handleSubmit, register } = useForm();
  const { singIn, isAuthenticated } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("User registered Successfully");
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="formContainer">
        <form
          onSubmit={handleSubmit(async (values) => {
            singIn(values);
          })}
        >
          <Toaster richColors position="top-center" />
          <div className="imgContainer">
            <img src="src/assets/User_Icon.webp" alt="" />
          </div>
          <div className="impsContainer">
            <input
              type="text"
              placeholder="User name"
              {...register("userName", { required: true })}
            />

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
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
