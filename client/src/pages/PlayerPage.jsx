import { useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
  FaHeart,
  FaRandom,
  FaRedo,
} from "react-icons/fa";

const PlayerPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [currentSong, setCurrentSong] = useState({
    title: "Cosmic Waves",
    artist: "Stellar Beats",
    album: "Intergalactic Harmony",
    duration: 237, // in seconds
    coverArt: "linear-gradient(to right, #6a11cb, #2575fc)",
  });

  useEffect(() => {
    let interval;
    if (isPlaying && currentTime < currentSong.duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentSong.duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, currentSong.duration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeChange = (e) => {
    setCurrentTime(parseInt(e.target.value));
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-6">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Now Playing
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl shadow-2xl flex-shrink-0"
            style={{ background: currentSong.coverArt }}
          ></div>

          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">{currentSong.title}</h2>
              <p className="text-xl text-gray-400 mb-6">
                {currentSong.artist} • {currentSong.album}
              </p>

              <div className="mb-4">
                <div className="h-1.5 bg-gray-700 rounded-full mb-2">
                  <div
                    className="h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    style={{
                      width: `${(currentTime / currentSong.duration) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(currentSong.duration)}</span>
                </div>
              </div>

              <div className="flex justify-center space-x-8 mb-8">
                <button className="text-gray-400 hover:text-white text-xl">
                  <FaRandom />
                </button>
                <button className="text-gray-400 hover:text-white text-2xl">
                  <FaStepBackward />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-3xl bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full hover:shadow-lg"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="text-gray-400 hover:text-white text-2xl">
                  <FaStepForward />
                </button>
                <button className="text-gray-400 hover:text-white text-xl">
                  <FaRedo />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <FaVolumeUp className="text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center">
                <FaHeart className="mr-2 text-pink-500" />
                Like
              </button>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg">
                Add to Playlist
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Up Next</h3>
          <div className="space-y-3">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition-all"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></div>
                    <div className="ml-4">
                      <div className="font-medium">Next Track {i + 1}</div>
                      <div className="text-sm text-gray-400">Next Artist</div>
                    </div>
                  </div>
                  <div className="text-gray-400">2:45</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
