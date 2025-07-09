import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";

const AuthPage = () => {
  const navigate = useNavigate();

  // In a real app, you would implement proper OAuth flow with Spotify
  const handleSpotifyLogin = () => {
    // Simulate successful login
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Connect to MeloGen
          </h1>
          <p className="text-gray-400">
            Sign in to create personalized playlists
          </p>
        </div>

        <div className="space-y-6">
          <button
            onClick={handleSpotifyLogin}
            className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaSpotify className="text-2xl" />
            <span className="font-semibold">Continue with Spotify</span>
          </button>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-300">
              Sign In
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
