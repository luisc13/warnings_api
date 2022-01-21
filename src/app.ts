import express from "express"
import  Router  from "./routes"

const app = express();

app.use(express.json());
app.use(Router);
app.listen(4000, () => console.log("Server started on port 4000"));