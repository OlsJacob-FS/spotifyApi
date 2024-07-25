const axios = require("axios");
const BASE_URL = "https://api.spotify.com/v1/";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

exports.fetchProfile = async (req, res) => {
  let code =
    "AQAjSv2p3F6yk9P3syYxSR_knsTG-E0-BckFEdqGpePBer9pFARMPfMdKXjzIQRCpuwSAqo762jlQWx3I6fttmYYzasT7KyzREueFHq1RtBhnv1zksQYwZP-1P8OSxw4s7iCZzn5rY2uXSS334e14vmGTwgRMJKz-22-3WqkViF6tPUkP-w_NKMFFJVxVOhoDnXhsluoJSCw6oxIn78nT6-Xx6ikDhGb_JifTifsYvBQ";
  // fetch spotify token to get access token
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };
  console.log("this is code", code);

  const { data } = await axios.post(authOptions.url, authOptions.form, {
    headers: authOptions.headers,
  });
  const token = { access_token: data.access_token };
  console.log(token);
  const result = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer BQDL-HT75M9Yk09QBe5X3iEpO4g3vHldtKyspnItnaI1VENrM1n9Wy5noUb1D2DP2W7OnyndhEq9-N3d-Ae35fYMBg-w2vVCUkrolExIKeIlR5-__aveja0ivZoM3FMueQyY82QIssGCBmrViUx02tSR8nH-SZnSynlXUebVj-bodQvEPLcZRL6PXsIgIb3pwOn4PT8`,
    },
  });

  console.log(result.json());
  //return await result.json();
};
