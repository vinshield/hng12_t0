const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.json({
		email: "jeslelacodes@gmail.com",
		current_datetime: new Date().toISOString(),
		github_url: "https://github.com/vinshield/hng12_t0",
	});
});
const port = process.env.PORT || 2000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
