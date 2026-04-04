import { useState } from "react";
import InputField from "../atoms/inputField";
import Button from "../atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/images/Vector.png";
import LogoImages from "../../assets/images/google-icon.png";
import { loginUser } from "../../services/api";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser(email, password);

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>

      <div className="flex flex-col space-y-1">
        <label className="text-sm font-poppins font-medium text-[#333333ad] border-[#3a35411f]">
          E-Mail<span className="text-red-500">*</span>
        </label>
        <InputField
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm font-medium text-[#333333ad]">
          Kata Sandi <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <InputField
            type="password"
            placeholder=""
            className="pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={LogoImage}
            alt="eye"
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          to="#"
          className="text-sm font-medium text-[#333333ad] hover:underline"
        >
          Lupa Password?
        </Link>
      </div>

      <Button variant="primary" type="submit">Masuk</Button>
      <Button variant="outline">Daftar</Button>

      <div className="flex items-center my-6">
        <div className="flex-grow border-b border-[#333333ad]" />
        <span className="mx-2 text-[#333333ad] text-sm">atau</span>
        <div className="flex-grow border-b border-[#333333ad]" />
      </div>

      <Button variant="secondary">
        <img
          src={LogoImages}
          alt="Google"
          className="w-5 h-5 inline-block mr-2"
        />
        Masuk dengan Google
      </Button>
    </form>
  );
}

export default LoginForm;