export default function ErrorPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-gray-600 mb-6">Oops! Page not found.</p>
      <a
        href="/"
        className="px-5 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md"
      >
        Go Home
      </a>
    </div>
  );
}