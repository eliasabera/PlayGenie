import {
  FaUsers,
  FaMusic,
  FaChartLine,
  FaServer,
  FaUserShield,
} from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";

const AdminPage = () => {
  // Mock data for the admin dashboard
  const stats = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Total Users",
      value: "1,248",
      change: "+12%",
      trend: "up",
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Tracks Played",
      value: "24,876",
      change: "+8%",
      trend: "up",
    },
    {
      icon: <RiPlayListFill className="text-3xl" />,
      title: "Playlists Created",
      value: "3,142",
      change: "+23%",
      trend: "up",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Avg. Session",
      value: "12.4 mins",
      change: "-2%",
      trend: "down",
    },
  ];

  const recentUsers = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      joined: "2 hours ago",
      status: "active",
    },
    {
      id: 2,
      name: "Sam Wilson",
      email: "sam@example.com",
      joined: "5 hours ago",
      status: "active",
    },
    {
      id: 3,
      name: "Taylor Smith",
      email: "taylor@example.com",
      joined: "1 day ago",
      status: "inactive",
    },
    {
      id: 4,
      name: "Jordan Lee",
      email: "jordan@example.com",
      joined: "2 days ago",
      status: "active",
    },
    {
      id: 5,
      name: "Casey Brown",
      email: "casey@example.com",
      joined: "3 days ago",
      status: "active",
    },
  ];

  const popularPlaylists = [
    {
      id: 1,
      name: "Work Focus Mix",
      creator: "Alex Johnson",
      plays: 1243,
      mood: "focused",
    },
    {
      id: 2,
      name: "Chill Vibes",
      creator: "Sam Wilson",
      plays: 987,
      mood: "calm",
    },
    {
      id: 3,
      name: "Workout Power",
      creator: "Taylor Smith",
      plays: 876,
      mood: "energetic",
    },
    {
      id: 4,
      name: "Rainy Day",
      creator: "Jordan Lee",
      plays: 765,
      mood: "melancholic",
    },
    {
      id: 5,
      name: "Party Starter",
      creator: "Casey Brown",
      plays: 654,
      mood: "happy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-6">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Admin Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm bg-green-600 bg-opacity-30 px-3 py-1 rounded-full flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              System Online
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <span className="font-bold">A</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 mb-2">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    stat.trend === "up"
                      ? "bg-green-600 bg-opacity-20 text-green-400"
                      : "bg-red-600 bg-opacity-20 text-red-400"
                  }`}
                >
                  {stat.icon}
                </div>
              </div>
              <div
                className={`mt-4 text-sm flex items-center ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.trend === "up" ? (
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                )}
                {stat.change} from last week
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Users</h2>
              <button className="text-sm text-gray-400 hover:text-white">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-gray-700">
                    <th className="pb-3">User</th>
                    <th className="pb-3">Email</th>
                    <th className="pb-3">Joined</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-800 hover:bg-gray-700 hover:bg-opacity-30"
                    >
                      <td className="py-4">{user.name}</td>
                      <td className="py-4 text-gray-400">{user.email}</td>
                      <td className="py-4 text-gray-400">{user.joined}</td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            user.status === "active"
                              ? "bg-green-600 bg-opacity-20 text-green-400"
                              : "bg-gray-600 bg-opacity-20 text-gray-400"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-gray-400 hover:text-white">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Popular Playlists</h2>
              <button className="text-sm text-gray-400 hover:text-white">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {popularPlaylists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="flex items-center justify-between p-3 bg-gray-700 bg-opacity-30 rounded-lg hover:bg-gray-600 hover:bg-opacity-50 transition-all"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></div>
                    <div className="ml-3">
                      <div className="font-medium">{playlist.name}</div>
                      <div className="text-xs text-gray-400">
                        {playlist.creator}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">
                      {playlist.plays} plays
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        playlist.mood === "focused"
                          ? "bg-blue-600 bg-opacity-20 text-blue-400"
                          : playlist.mood === "calm"
                          ? "bg-green-600 bg-opacity-20 text-green-400"
                          : playlist.mood === "energetic"
                          ? "bg-yellow-600 bg-opacity-20 text-yellow-400"
                          : playlist.mood === "happy"
                          ? "bg-pink-600 bg-opacity-20 text-pink-400"
                          : "bg-gray-600 bg-opacity-20 text-gray-400"
                      }`}
                    >
                      {playlist.mood}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">System Health</h2>
              <span className="text-sm text-green-400 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                All systems normal
              </span>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: <FaServer className="text-2xl" />,
                  name: "API Server",
                  status: "operational",
                  usage: "42%",
                },
                {
                  icon: <FaMusic className="text-2xl" />,
                  name: "Music Streaming",
                  status: "operational",
                  usage: "68%",
                },
                {
                  icon: <FaUserShield className="text-2xl" />,
                  name: "Authentication",
                  status: "operational",
                  usage: "23%",
                },
              ].map((system, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-gray-700 mr-4">
                      {system.icon}
                    </div>
                    <div>
                      <div className="font-medium">{system.name}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {system.status}
                      </div>
                    </div>
                  </div>
                  <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        system.usage < 50
                          ? "bg-green-500"
                          : system.usage < 80
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${system.usage}` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Activity Log</h2>
              <button className="text-sm text-gray-400 hover:text-white">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  time: "2 mins ago",
                  event: "New playlist generated by user Alex Johnson",
                  type: "playlist",
                },
                {
                  time: "15 mins ago",
                  event: "User Sam Wilson connected Spotify account",
                  type: "connection",
                },
                {
                  time: "1 hour ago",
                  event: "System update completed (v1.2.3)",
                  type: "system",
                },
                {
                  time: "3 hours ago",
                  event: "New user registration: Taylor Smith",
                  type: "user",
                },
                {
                  time: "5 hours ago",
                  event: "API request limit reached for user Jordan Lee",
                  type: "warning",
                },
              ].map((log, i) => (
                <div key={i} className="flex items-start">
                  <div
                    className={`w-2 h-2 mt-2 rounded-full mr-3 flex-shrink-0 ${
                      log.type === "playlist"
                        ? "bg-purple-500"
                        : log.type === "connection"
                        ? "bg-blue-500"
                        : log.type === "system"
                        ? "bg-green-500"
                        : log.type === "user"
                        ? "bg-cyan-500"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <div className="text-sm">{log.event}</div>
                    <div className="text-xs text-gray-400 mt-1">{log.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
