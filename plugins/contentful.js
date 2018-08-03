require("dotenv").config();
const createClient = require("contentful").createClient;
const fs = require("fs");
const { resolve } = require("path");
const contentful = createClient({
  space: process.env.GCS_SPACE,
  accessToken: process.env.GCS_TOKEN
});

(async () => {
  const photos = await contentful.getAssets();
  console.log(photos);
  fs.writeFileSync(
    resolve(__dirname, "../assets/contentful.json"),
    JSON.stringify(photos.fields.file.url)
  );
})();
