import Hero from "../components/Hero";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 8)));
  }, []);

  return (
    <>
      <Hero />

    <section className="bg-white py-16 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-[#001931] mb-4">
        Trending Apps
      </h1>
      <h2 className="mb-10 text-[#627382] text-xl font-normal">Explore All Trending Apps on the Market developed by us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {apps.map((app) => (
          <div
            key={app.id}
            onClick={() => navigate(`/apps/${app.id}`)}
            class="cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-[#001931] hover:border-blue-400 hover:bg-gradient-to-br from-white via-blue-50 to-cyan-50"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-contain rounded-xl mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">{app.title}</h3>
            <span className="flex justify-between items-center gap-30 md:gap-22 lg:gap-20 xl:gap-36">
              <p className="text-sm text-[#00D390] inline-flex justify-center items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 18v2h14v-2H5z"/></svg>{app.downloads.toLocaleString()}M
                </p>
            <p className="text-yellow-500 font-semibold inline-flex justify-center items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>{app.ratingAvg.toFixed(1)}
            </p>
            </span>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/apps")} className="relative btn text-sm md:text-base font-semibold text-white border-0 flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg px-5 py-2 transition-all duration-500 overflow-hidden group hover:scale-105 hover:shadow-[0_0_20px_#9F62F2] mx-auto mt-12">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
        Show All
      </button>

    </section>
     </>
  );
}