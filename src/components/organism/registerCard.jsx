import RegisterForm from "../molecules/registerForm";

function RegisterCard({ onSuccess }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md font-poppins">
      <h2 className="text-center text-3xl font-semibold mb-2">
        Pendaftaran Akun
      </h2>
      <p className="text-center text-sm mb-6 text-[#333333ad]">
        Yuk, daftarkan akunmu sekarang juga!
      </p>

      <RegisterForm onSuccess={onSuccess} />
    </div>
  );
}

export default RegisterCard;