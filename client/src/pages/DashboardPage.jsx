import { useState } from "react";
import { FaRandom, FaMusic, FaHeart, FaRegClock } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
// import { MdOutlineMood, MdOutlineGenre } from "react-icons/md";

const DashboardPage = () => {
  const [mood, setMood] = useState("happy");
  const [genre, setGenre] = useState("pop");
  const [activity, setActivity] = useState("working");
  const [isGenerating, setIsGenerating] = useState(false);
  const [playlist, setPlaylist] = useState(null);

  const moods = [
    { value: "happy", label: "Happy", emoji: "😊" },
    { value: "sad", label: "Sad", emoji: "😢" },
    { value: "energetic", label: "Energetic", emoji: "⚡" },
    { value: "calm", label: "Calm", emoji: "🧘" },
    { value: "romantic", label: "Romantic", emoji: "💖" },
  ];

  const genres = [
    { value: "pop", label: "Pop" },
    { value: "rock", label: "Rock" },
    { value: "electronic", label: "Electronic" },
    { value: "hiphop", label: "Hip Hop" },
    { value: "jazz", label: "Jazz" },
    { value: "classical", label: "Classical" },
  ];

  const activities = [
    { value: "working", label: "Working" },
    { value: "working out", label: "Working Out" },
    { value: "relaxing", label: "Relaxing" },
    { value: "partying", label: "Partying" },
    { value: "commuting", label: "Commuting" },
  ];

  const generatePlaylist = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      const mockPlaylist = {
        name: `${mood} ${genre} mix`,
        tracks: Array(10)
          .fill(0)
          .map((_, i) => ({
            id: `track${i}`,
            name: `Song ${i + 1}`,
            artist: `Artist ${i + 1}`,
            album: `Album ${i + 1}`,
            duration: `${Math.floor(Math.random() * 4) + 2}:${Math.floor(
              Math.random() * 60
            )
              .toString()
              .padStart(2, "0")}`,
          })),
        mood,
        genre,
        activity,
        timestamp: new Date().toISOString(),
      };
      setPlaylist(mockPlaylist);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            MeloGen
          </h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
              <IoMdSettings className="text-xl" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <span className="font-bold">U</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaRandom className="mr-3 text-purple-400" />
                Generate Playlist
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-3 flex items-center">
                    <MdOutlineMood className="mr-2" />
                    Current Mood
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {moods.map((m) => (
                      <button
                        key={m.value}
                        onClick={() => setMood(m.value)}
                        className={`px-4 py-2 rounded-full flex items-center transition-all ${
                          mood === m.value
                            ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        }`}
                      >
                        <span className="mr-2">{m.emoji}</span>
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-3 flex items-center">
                    <MdOutlineGenre className="mr-2" />
                    Preferred Genre
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {genres.map((g) => (
                      <button
                        key={g.value}
                        onClick={() => setGenre(g.value)}
                        className={`px-4 py-2 rounded-full transition-all ${
                          genre === g.value
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-3">
                    Current Activity
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {activities.map((a) => (
                      <button
                        key={a.value}
                        onClick={() => setActivity(a.value)}
                        className={`px-4 py-3 rounded-lg transition-all ${
                          activity === a.value
                            ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
                            : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        }`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={generatePlaylist}
                  disabled={isGenerating}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                    isGenerating
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 hover:shadow-xl"
                  }`}
                >
                  {isGenerating ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FaMusic className="mr-2" />
                      Generate Playlist
                    </span>
                  )}
                </button>
              </div>
            </div>

            {playlist && (
              <div className="mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">{playlist.name}</h3>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg transition-all">
                    Save Playlist
                  </button>
                </div>
                <div className="space-y-3">
                  {playlist.tracks.map((track, i) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-4 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-gray-600 transition-all"
                    >
                      <div className="flex items-center">
                        <span className="text-gray-400 w-8">{i + 1}</span>
                        <div className="ml-4">
                          <div className="font-medium">{track.name}</div>
                          <div className="text-sm text-gray-400">
                            {track.artist}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <span className="text-gray-400">{track.duration}</span>
                        <button className="text-gray-400 hover:text-pink-500 transition-colors">
                          <FaHeart />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-xl mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaRegClock className="mr-2 text-blue-400" />
                Recently Played
              </h3>
              <div className="space-y-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0"></div>
                      <div className="ml-3">
                        <div className="font-medium">Recent Track {i + 1}</div>
                        <div className="text-sm text-gray-400">
                          Recent Artist
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Now Playing</h3>
              <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl p-6">
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
                <div className="text-center">
                  <h4 className="text-lg font-bold">Current Song</h4>
                  <p className="text-gray-400">Current Artist</p>
                </div>
                <div className="mt-6">
                  <div className="h-1 bg-gray-700 rounded-full mb-2">
                    <div className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-8 mt-6">
                  <button className="text-2xl text-gray-300 hover:text-white">
                    ⏮
                  </button>
                  <button className="text-3xl text-white bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full hover:shadow-lg">
                    ▶
                  </button>
                  <button className="text-2xl text-gray-300 hover:text-white">
                    ⏭
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
