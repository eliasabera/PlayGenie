import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            MeloGen
          </div>
          <Link
            to="/login"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Login with Spotify
          </Link>
        </header>

        <main className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              AI-Powered
            </span>{" "}
            Music Discovery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Generate personalized playlists based on your mood, activity, and
            preferences. Powered by advanced algorithms and Spotify's vast music
            library.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "😊",
                title: "Mood Analysis",
                desc: "Playlists tailored to your current emotional state",
              },
              {
                icon: "🎵",
                title: "Smart Recommendations",
                desc: "Discover new music based on your listening habits",
              },
              {
                icon: "⚡",
                title: "Activity Matching",
                desc: "Perfect soundtracks for workouts, focus, or relaxation",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <Link
            to="/login"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-xl font-semibold"
          >
            Get Started
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
