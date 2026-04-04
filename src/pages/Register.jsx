import AuthLayout from "../components/Layout/authLayout";
import RegisterCard from "../components/organism/registerCard";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <RegisterCard onSuccess={() => navigate("/login")} />
    </AuthLayout>
  );
}

export default Register;