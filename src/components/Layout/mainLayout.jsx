import { useState } from "react";
import Logo from "../atoms/logo";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/images/icon-kanan.png";
import Footer from "../organism/footer";
import { useStore } from "../../store/useStore";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">

      <header className="bg-white shadow-[20px_10px_40px_rgba(62,67,74,0.31)] relative w-full h-[74px] md:pl-20 md:shadow-none px-6 py-4 flex justify-between items-center">
 
        <Logo />

        <div className="hidden md:flex items-center space-x-6">

          <details className="relative">
            <summary className="cursor-pointer text-gray-700 font-medium hover:text-orange-500 list-none">
              Kategori
            </summary>
          </details>

          
          <details className="relative pr-20">
            <summary className="list-none cursor-pointer flex items-center gap-2">
              
              <img
                src={avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />

              {user && (
                <span className="font-medium  text-gray-700">
                  {user.name}
                </span>
              )}

            </summary>

            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">

              {!user ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-orange-100"
                    >
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/register"
                      className="block px-4 py-2 hover:bg-orange-100"
                    >
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => navigate("/admin")}
                      className="block w-full text-left px-4 py-2 hover:bg-orange-100"
                    >
                      Admin
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-orange-100"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

            </ul>
          </details>

        </div>

        
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </header>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          <ul className="pl-4">

            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block py-1 hover:text-orange-500"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    className="block py-1 hover:text-orange-500"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/admin"
                    className="block py-1 hover:text-orange-500"
                  >
                    Admin
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-1 text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      )}

      <main className="flex-grow bg-[#fdf8f2]">{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;