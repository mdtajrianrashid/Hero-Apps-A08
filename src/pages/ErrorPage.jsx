import pageError from "../assets/error-404.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center text-center py-8 text-gray-500 mt-[80px]">
        <img className="mb-4" src={pageError} alt="Apps Not Found" />
        <h1 className="text-3xl sm:text-5xl font-bold text-[#001931] mb-4">
          Oops, page not found!
        </h1>
        <h2 className="mb-10 text-[#627382] text-xl font-normal">
          The page you are looking for is not available.
        </h2>

        <button
          onClick={() => navigate("/")}
          className="relative btn text-sm md:text-base font-semibold text-white border-0 flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg px-5 py-2 transition-all duration-500 overflow-hidden group hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
          Go Back!
        </button>
      </main>

      <Footer />
    </div>
  );
}
