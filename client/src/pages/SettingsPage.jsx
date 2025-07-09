import { useState } from "react";
import {
  FaUser,
  FaBell,
  FaMoon,
  FaSpotify,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdLibraryMusic, MdPrivacyTip } from "react-icons/md";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState({
    name: "User Name",
    email: "user@example.com",
    avatar: "linear-gradient(to right, #6a11cb, #2575fc)",
    preferences: {
      theme: "dark",
      defaultMood: "happy",
      favoriteGenres: ["pop", "electronic"],
      notifications: true,
    },
  });

  const updatePreference = (key, value) => {
    setUser((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value,
      },
    }));
  };

  const allGenres = [
    "pop",
    "rock",
    "electronic",
    "hiphop",
    "jazz",
    "classical",
    "r&b",
    "country",
    "metal",
    "indie",
    "latin",
    "reggae",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6">
      <div className="container mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Settings
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center mb-8">
                <div
                  className="w-16 h-16 rounded-full"
                  style={{ background: user.avatar }}
                ></div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "profile", icon: <FaUser />, label: "Profile" },
                  {
                    id: "preferences",
                    icon: <IoMdSettings />,
                    label: "Preferences",
                  },
                  {
                    id: "notifications",
                    icon: <FaBell />,
                    label: "Notifications",
                  },
                  { id: "privacy", icon: <MdPrivacyTip />, label: "Privacy" },
                  {
                    id: "connected",
                    icon: <FaSpotify />,
                    label: "Connected Apps",
                  },
                  {
                    id: "library",
                    icon: <MdLibraryMusic />,
                    label: "Music Library",
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                        : "text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}

                <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 mt-8">
                  <span className="mr-3 text-red-400">
                    <FaSignOutAlt />
                  </span>
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-xl">
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-400 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Avatar</label>
                      <div className="flex items-center space-x-6">
                        <div
                          className="w-20 h-20 rounded-full"
                          style={{ background: user.avatar }}
                        ></div>
                        <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                          Change Avatar
                        </button>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "preferences" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Preferences</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">App Theme</h3>
                      <div className="flex space-x-4">
                        {["light", "dark", "system"].map((theme) => (
                          <button
                            key={theme}
                            onClick={() => updatePreference("theme", theme)}
                            className={`px-6 py-3 rounded-lg capitalize ${
                              user.preferences.theme === theme
                                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                            }`}
                          >
                            {theme}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Default Mood
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {[
                          "happy",
                          "sad",
                          "energetic",
                          "calm",
                          "focused",
                          "romantic",
                        ].map((mood) => (
                          <button
                            key={mood}
                            onClick={() =>
                              updatePreference("defaultMood", mood)
                            }
                            className={`px-4 py-2 rounded-full capitalize ${
                              user.preferences.defaultMood === mood
                                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                            }`}
                          >
                            {mood}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Favorite Genres
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {allGenres.map((genre) => (
                          <button
                            key={genre}
                            onClick={() => {
                              const updatedGenres =
                                user.preferences.favoriteGenres.includes(genre)
                                  ? user.preferences.favoriteGenres.filter(
                                      (g) => g !== genre
                                    )
                                  : [...user.preferences.favoriteGenres, genre];
                              updatePreference("favoriteGenres", updatedGenres);
                            }}
                            className={`px-4 py-2 rounded-full capitalize ${
                              user.preferences.favoriteGenres.includes(genre)
                                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                            }`}
                          >
                            {genre}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Notification Settings
                  </h2>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-gray-700 bg-opacity-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">Email Notifications</h3>
                        <p className="text-sm text-gray-400">
                          Receive updates via email
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={user.preferences.notifications}
                          onChange={(e) =>
                            updatePreference("notifications", e.target.checked)
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-700 bg-opacity-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">Push Notifications</h3>
                        <p className="text-sm text-gray-400">
                          Receive app notifications
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={true}
                          readOnly
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-700 bg-opacity-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">New Releases</h3>
                        <p className="text-sm text-gray-400">
                          Notify about new music from your favorites
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={true}
                          readOnly
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "privacy" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Privacy Settings</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg">
                      <h3 className="font-semibold mb-4">Data Sharing</h3>
                      <p className="text-gray-400 mb-4">
                        Control how your data is shared to improve your
                        experience and help us enhance our services.
                      </p>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Share listening activity</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={true}
                              readOnly
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500"></div>
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Allow personalized ads</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={false}
                              readOnly
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg">
                      <h3 className="font-semibold mb-4">Account Visibility</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Make my profile public</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={false}
                              readOnly
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500"></div>
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Show my activity status</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={true}
                              readOnly
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "connected" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Connected Apps</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                          <FaSpotify className="text-2xl" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold">Spotify</h3>
                          <p className="text-sm text-gray-400">Connected</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 transition-colors">
                        Disconnect
                      </button>
                    </div>

                    <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                          <span className="font-bold">G</span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold">Google</h3>
                          <p className="text-sm text-gray-400">Not connected</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "library" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Music Library Settings
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg">
                      <h3 className="font-semibold mb-4">Import/Export</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="p-4 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
                          Import from Spotify
                        </button>
                        <button className="p-4 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
                          Export to JSON
                        </button>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg">
                      <h3 className="font-semibold mb-4">Library Management</h3>
                      <div className="space-y-4">
                        <button className="w-full p-4 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors text-left">
                          Refresh Library
                        </button>
                        <button className="w-full p-4 bg-red-600 hover:bg-red-500 rounded-lg transition-colors text-left">
                          Clear Cache
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
