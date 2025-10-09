import React, { useEffect, useState } from "react";

export default function Installation() {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("High-Low");
  const [showToast, setShowToast] = useState("");
  const [showSortOptions, setShowSortOptions] = useState(false);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        const installed = data.filter((a) => stored.includes(a.id));
        installed.sort((a, b) => b.downloads - a.downloads);
        setInstalledApps(installed);
      });
  }, []);

  const handleUninstall = (id, title) => {
    const updated = installedApps.filter((a) => a.id !== id);
    setInstalledApps(updated);
    localStorage.setItem(
      "installedApps",
      JSON.stringify(updated.map((a) => a.id))
    );

    setShowToast(`${title} uninstalled successfully!`);
    setTimeout(() => setShowToast(""), 2500);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...installedApps];
    if (order === "High-Low") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "Low-High") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sorted);
    setShowSortOptions(false);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#001931]">
            Your Installed Apps
          </h2>
          <p className="text-[#627382] text-xl font-normal mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 relative">
          <p className="text-gray-600 font-semibold">
            {installedApps.length} Apps Found
          </p>

<div className="relative">
  <button onClick={() => setShowSortOptions(!showSortOptions)} className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-[#627382] text-sm font-medium shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-indigo-400 transition"
  >Sort by Downloads:{" "}
  <span className="text-indigo-600 font-semibold">{sortOrder === "High-Low" ? "High → Low" : "Low → High"}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-4 transition-transform duration-200 ${
        showSortOptions ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
      </button>
      
      {showSortOptions && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <button onClick={() => {handleSort("High-Low"); setShowSortOptions(false);}}className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
          sortOrder === "High-Low" ? "font-semibold text-indigo-600" : "text-gray-700"}`}>High → Low
          </button>
          <button onClick={() => {handleSort("Low-High"); setShowSortOptions(false);}}className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
          sortOrder === "Low-High" ? "font-semibold text-indigo-600" : "text-gray-700"}`}
      >Low → High</button>
      </div>
    )}
    </div>
    </div>

        <div className="space-y-4">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {app.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm">
                      <span className="text-green-600 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                          />
                        </svg>
                        {app.downloads}M
                      </span>
                      <span className="text-orange-500 flex items-center gap-1">
                        ⭐ {app.ratingAvg}
                      </span>
                      <span className="text-gray-500">{app.size} MB</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="mt-3 sm:mt-0 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md font-medium shadow-sm transition"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No apps installed yet.
            </p>
          )}
        </div>
      </div>

      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg">
          {showToast}
        </div>
      )}
    </section>
  );
}
