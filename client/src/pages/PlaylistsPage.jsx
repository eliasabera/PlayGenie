import { useState } from "react";
import { FaPlus, FaTrash, FaEdit, FaMusic, FaRandom } from "react-icons/fa";

const PlaylistsPage = () => {
  const [playlists, setPlaylists] = useState([
    {
      id: "1",
      name: "Work Focus Mix",
      description: "Concentration booster for deep work",
      tracks: 24,
      mood: "focused",
      genre: "electronic",
      image: "linear-gradient(to right, #667eea, #764ba2)",
    },
    {
      id: "2",
      name: "Chill Vibes",
      description: "Relaxing tunes for lazy weekends",
      tracks: 18,
      mood: "calm",
      genre: "jazz",
      image: "linear-gradient(to right, #4facfe, #00f2fe)",
    },
    {
      id: "3",
      name: "Workout Power",
      description: "High energy tracks for the gym",
      tracks: 32,
      mood: "energetic",
      genre: "hiphop",
      image: "linear-gradient(to right, #f83600, #f9d423)",
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({
    name: "",
    description: "",
    mood: "",
    genre: "",
  });

  const handleCreatePlaylist = () => {
    const playlist = {
      id: Date.now().toString(),
      name: newPlaylist.name,
      description: newPlaylist.description,
      tracks: 0,
      mood: newPlaylist.mood,
      genre: newPlaylist.genre,
      image: "linear-gradient(to right, #6a11cb, #2575fc)",
    };
    setPlaylists([...playlists, playlist]);
    setShowCreateModal(false);
    setNewPlaylist({ name: "", description: "", mood: "", genre: "" });
  };

  const deletePlaylist = (id) => {
    setPlaylists(playlists.filter((playlist) => playlist.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-6">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Playlists
          </h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
          >
            <FaPlus className="mr-2" />
            Create New
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className="h-40 w-full"
                style={{ background: playlist.image }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{playlist.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {playlist.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => deletePlaylist(playlist.id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <FaMusic className="mr-1" />
                    <span>{playlist.tracks} tracks</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700">
                      {playlist.mood}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700">
                      {playlist.genre}
                    </span>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg transition-all flex items-center justify-center">
                  <FaRandom className="mr-2" />
                  Shuffle Play
                </button>
              </div>
            </div>
          ))}
        </div>

        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Create New Playlist</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Playlist Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    value={newPlaylist.name}
                    onChange={(e) =>
                      setNewPlaylist({ ...newPlaylist, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    rows="3"
                    value={newPlaylist.description}
                    onChange={(e) =>
                      setNewPlaylist({
                        ...newPlaylist,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Mood</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    value={newPlaylist.mood}
                    onChange={(e) =>
                      setNewPlaylist({ ...newPlaylist, mood: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Genre</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    value={newPlaylist.genre}
                    onChange={(e) =>
                      setNewPlaylist({ ...newPlaylist, genre: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreatePlaylist}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistsPage;
