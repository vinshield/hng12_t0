const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.json({
		email: "your-email@example.com",
		current_datetime: new Date().toISOString(),
		github_url: "https://github.com/vinshield/your-repo",
	});
});
const port = process.env.PORT || 2000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
