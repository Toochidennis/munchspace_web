import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-9xl font-extrabold text-primary">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral-600">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-lg"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white hover:bg-gray-50 text-neutral-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-neutral-200 flex items-center justify-center gap-2 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
