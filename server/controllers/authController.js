const User = require("../models/User");
const spotifyApi = require("../config/spotifyConfig");
const { generateToken } = require("../services/authService");

exports.spotifyAuth = async (req, res) => {
  try {
    const { code } = req.body;

    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token } = data.body;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    const me = await spotifyApi.getMe();
    const { id, display_name, email } = me.body;

    let user = await User.findOne({ spotifyId: id });

    if (!user) {
      user = new User({
        spotifyId: id,
        displayName: display_name,
        email: email,
        accessToken: access_token,
        refreshToken: refresh_token,
      });
      await user.save();
    } else {
      user.accessToken = access_token;
      user.refreshToken = refresh_token;
      await user.save();
    }

    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        spotifyId: user.spotifyId,
        displayName: user.displayName,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Spotify auth error:", err);
    res.status(500).json({ error: "Authentication failed" });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.user;
    spotifyApi.setRefreshToken(refreshToken);

    const data = await spotifyApi.refreshAccessToken();
    const { access_token } = data.body;

    req.user.accessToken = access_token;
    await req.user.save();

    spotifyApi.setAccessToken(access_token);

    res.json({ accessToken: access_token });
  } catch (err) {
    console.error("Token refresh error:", err);
    res.status(500).json({ error: "Token refresh failed" });
  }
};
