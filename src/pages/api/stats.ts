import { NextApiRequest } from "next";
import { responseDelay, stats } from "src/mockApi/data";

export default async function handler(req:NextApiRequest, res) {
  // console.log(req);

  // req.c
  // console.log("🚀 ~ file: stats.ts:17 ~ handler ~ req.cookies", req.cookies)
  
  try {
    await setTimeout(() => {
      return res.json(stats);
    }, responseDelay);
  } catch (error) {
    return res.json("error happened please try again later");
  }
}
