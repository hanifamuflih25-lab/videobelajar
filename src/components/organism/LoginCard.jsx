import LoginForm from "../molecules/LoginForm";

function LoginCard() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md font-poppins">
      <h2 className="text-center text-3xl font-semibold mb-2 font-poppins">
        Masuk ke Akun
      </h2>
      <p className="text-center text-[#333333ad] text-sm mb-6 font-poppins">
        Yuk, lanjutin belajarmu di videobelajar
      </p>
      <LoginForm />
    </div>
  );
}

export default LoginCard;