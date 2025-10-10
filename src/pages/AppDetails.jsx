import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";
import appError from "../assets/App-Error.png";

export default function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === parseInt(id, 10));
        setApp(found || null);

        const installedStr = localStorage.getItem("installedApps");
        const installedArr = installedStr ? JSON.parse(installedStr) : [];
        if (found && installedArr.includes(found.id)) {
          setInstalled(true);
        }
      })
      .catch(() => setApp(null));
  }, [id]);

  if (!app)
    return (
      <div className="w-full flex flex-col justify-center items-center text-center py-8 text-gray-500">
                  <img className="mb-4" src={appError} alt="Apps Not Found" />
                  <h1 className="text-3xl sm:text-5xl font-bold text-[#001931] mb-4">OPPS!! APP NOT FOUND</h1>
                  <h2 className="mb-10 text-[#627382] text-xl font-normal">The App you are requesting is not found on our system.  please try another apps</h2>
                  <a href="/apps" rel="noopener noreferrer" className="relative btn text-sm md:text-base font-semibold text-white border-0 flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg px-5 py-2 transition-all duration-500 overflow-hidden group hover:scale-105 hover:shadow-[0_0_20px_#9F62F2]">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>Go Back!
                  </a>
                </div>
    );

  const chartData = (app.ratings || [])
    .map((r) => {
      const star = parseInt(r.name, 10) || 0;
      return { star, name: r.name, count: r.count };
    })
    .sort((a, b) => b.star - a.star);

  const maxCount = Math.max(...chartData.map((d) => d.count), 0);
  const tickStep = Math.ceil(maxCount / 4) || 1;
  const xTicks = [0, tickStep, tickStep * 2, tickStep * 3, tickStep * 4];

  const formatDownloads = (d) => {
    if (typeof d === "number") return `${d % 1 === 0 ? d : d}${"M"}`;
    return d;
  };

  const formatReviews = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`;
    return String(n);
  };

  function handleInstall() {
    if (installed) return;

    try {
      const installedStr = localStorage.getItem("installedApps");
      const installedArr = installedStr ? JSON.parse(installedStr) : [];
      if (!installedArr.includes(app.id)) installedArr.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedArr));
      setInstalled(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch {
      setInstalled(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  }

  return (
    <section className="max-w-8xl mx-auto px-6 py-12">
      <div className="bg-gray-200 rounded-lg p-6 shadow-md">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <div className="bg-white rounded-md p-4 shadow-inner w-[220px] h-[220px] flex items-center justify-center">
              <img
                src={app.image}
                alt={app.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-bold text-[#001931]">
              {app.title}
            </h1>
            <p className="mt-2 text-xl text-[#627382] font-normal">
              Developed by{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                {app.companyName}
              </span>
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
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
                </div>
                <div>
                  <div className="text-sm text-slate-500">Downloads</div>
                  <div className="text-lg font-bold text-slate-900">
                    {formatDownloads(app.downloads)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-50 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431L23 9.748l-5.5 5.356L18.335 24 12 19.897 5.665 24 7.5 15.104 2 9.748l7.332-1.73z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Average Ratings</div>
                  <div className="text-lg font-bold text-slate-900">
                    {app.ratingAvg.toFixed(1)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-4.03 8-9 8-1.003 0-1.969-.132-2.865-.378L3 20l1.378-5.135C3.56 13.732 3 12.93 3 12 3 7.582 7.03 4 12 4s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Total Reviews</div>
                  <div className="text-lg font-bold text-slate-900">
                    {formatReviews(app.reviews)}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`inline-flex items-center gap-3 px-4 py-2 rounded-md font-semibold shadow-sm transition disabled:opacity-60 ${
                  installed
                    ? "bg-slate-400 text-white cursor-default"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white"
                }`}
                aria-pressed={installed}
                aria-label={installed ? "Installed" : "Install app"}
              >
                {!installed ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                    Install Now ({app.size} MB)
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Installed
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200 dark:border-slate-700" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Ratings
            </h3>

            <div className="bg-white rounded-md p-4 shadow-sm">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  layout="vertical"
                  data={chartData}
                  margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    type="number"
                    tickFormatter={(value) => value.toLocaleString()}
                    domain={[0, Math.ceil(maxCount * 1.05)]}
                    ticks={xTicks}
                    stroke="#94a3b8"
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={90}
                    tick={{ fill: "#475569" }}
                  />
                  <Tooltip
                    formatter={(value) => [
                      value.toLocaleString(),
                      "Count",
                    ]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Bar dataKey="count" barSize={18}>
                    {chartData.map((entry) => (
                      <Cell key={entry.name} fill="#fb923c" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 text-sm text-slate-500 flex justify-between px-1">
              {xTicks.map((t) => (
                <span key={t}>{t.toLocaleString()}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-[#001931] mb-4">
              Description
            </h3>
            <div className="text-[#627382] text-xl leading-relaxed bg-white p-4 rounded-md shadow-sm">
              <p>{app.description}</p>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed right-6 top-6 z-50">
          <div className="px-4 py-2 rounded-md shadow-lg bg-emerald-500 text-white">
            Installed successfully!
          </div>
        </div>
      )}
    </section>
  );
}