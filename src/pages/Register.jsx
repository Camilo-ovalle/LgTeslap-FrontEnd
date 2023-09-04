import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth.js";

import "../styles/register.css";
function Register() {
  const { handleSubmit, register } = useForm();
  return (
    <>
      <div className="formContainer">
        <form
          onSubmit={handleSubmit(async (values) => {
            const res = await registerRequest(values);
            console.table(res.data);
          })}
        >
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
