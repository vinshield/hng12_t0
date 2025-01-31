const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use((req, res) => {
	res.status(404).json({ error: "Route not found" });
});

app.get("/", (req, res) => {
	try {
		res.status(200).json({
			email: "jeslelacodes@gmail.com",
			current_datetime: new Date().toISOString(),
			github_url: "https://github.com/vinshield/hng12_t0",
		});
	} catch (error) {
		res.status(500).json({ error: "internal server error" });
	}
});
const port = process.env.PORT || 2000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
