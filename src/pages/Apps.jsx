import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

export default function Apps() {
  const navigate = useNavigate();
  const [apps, setApps] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data || []);
        setTimeout(() => setLoading(false), 300);
      })
      .catch(() => {
        setApps([]);
        setLoading(false);
      });
  }, []);

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return apps;
    return apps.filter((a) => (a.title || "").toLowerCase().includes(q));
  }, [apps, query]);

  const handleSearchChange = (e) => {
    setLoading(true);
    const value = e.target.value;
    setQuery(value);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#001931] mb-2 text-center">
          Our All Applications
        </h1>

        <h2 className="mb-6 text-[#627382] text-xl font-normal text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </h2>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="text-left flex justify-center items-center gap-2">
            <p className="text-2xl font-semibold text-[#001931]">
              ({apps.length})
            </p>
            <p className="text-2xl font-semibold text-[#001931]">Apps Found</p>
          </div>

          <div className="w-full sm:w-1/2">
            <label htmlFor="app-search" className="sr-only">
              Search apps
            </label>
            <div className="relative">
              <input
                id="app-search"
                type="search"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search Apps"
                className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-500 bg-white text-[#627382] text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
                aria-label="Search Apps"
              />
              <svg
                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="col-span-full text-center py-20 text-gray-500">
            No Apps Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/apps/${app.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") navigate(`/apps/${app.id}`);
                }}
                className="cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-[#001931] hover:border-blue-400 hover:bg-gradient-to-br from-white via-blue-50 to-cyan-50"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-contain rounded-md mb-4"
                />
                <h3 className="font-bold text-lg text-gray-800 text-center">
                  {app.title}
                </h3>

                <div className="w-full flex justify-between items-center mt-4 text-sm">
                  <p className="text-sm text-[#00D390] inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 18v2h14v-2H5z" />
                    </svg>
                    {Number.isFinite(app.downloads)
                      ? app.downloads.toLocaleString()
                      : "0"}
                    M
                  </p>

                  <p className="text-yellow-500 font-semibold inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {typeof app.ratingAvg === "number"
                      ? app.ratingAvg.toFixed(1)
                      : "0.0"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}