const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Automatic Deployment Test Successful!",
    status: "success"
  });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;