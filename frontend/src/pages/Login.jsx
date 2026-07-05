import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",

    password: "",
  });

  async function submit(e) {
    e.preventDefault();

    try {
      await login(form);

      navigate("/");
    } catch (error) {
      alert("Invalid Login");
    }
  }

  return (
    <div
      className="
min-h-screen
flex
items-center
justify-center
bg-slate-950
"
    >
      <form
        onSubmit={submit}
        className="
glass
p-10
rounded-xl
w-96
"
      >
        <h1
          className="
text-3xl
font-bold
mb-8
"
        >
          BankSense Login
        </h1>

        <input
          placeholder="Email"
          className="
w-full
p-3
rounded
text-black
mb-4
"
          onChange={(e) =>
            setForm({
              ...form,

              email: e.target.value,
            })
          }
        />

        <input
          placeholder="Password"
          type="password"
          className="
w-full
p-3
rounded
text-black
mb-6
"
          onChange={(e) =>
            setForm({
              ...form,

              password: e.target.value,
            })
          }
        />

        <button
          className="
bg-blue-600
w-full
py-3
rounded
"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
