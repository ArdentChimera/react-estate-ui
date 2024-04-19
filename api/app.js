import express from "express";

const app = express();

app.use("/api/test", (req, res, next) => {
	res.send("It works");
});

app.listen(8800, () => {
	console.log("Server is running !");
});
