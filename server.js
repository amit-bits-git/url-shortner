const app = require("./app");
const PORT = process.env.PORT || 8000;

app.listen(8000, "0.0.0.0", () =>
  console.log("Server running on http://localhost:8000")
);
