import { cars, responseDelay } from "src/mockApi/data";

export default async function handler(req, res) {
  try {
    await setTimeout(() => {
      return res.json(cars);
    }, responseDelay);
  } catch (error) {
    return res.json("error happened please try again later");
  }
}
