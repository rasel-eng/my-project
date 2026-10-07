const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from my AWS CI/CD project!",
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