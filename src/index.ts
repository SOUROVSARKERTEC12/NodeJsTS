import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";

const app = express();
const port = 3000;

app.use(cors({
  credentials: true
}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response):any => {
  let x = 10;
  console.log(x);
  res.json({x});
  x = x + 10;
  console.log(x);
//   res.json({x});
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
