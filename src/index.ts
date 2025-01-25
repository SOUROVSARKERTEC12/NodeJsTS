import { log } from "console";
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

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
