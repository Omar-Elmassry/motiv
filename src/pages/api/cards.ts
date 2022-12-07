import { homeCards } from "src/mockApi/data";

export default async function handler(req, res) {
  try {
    await setTimeout(() => {
      return res.json(homeCards);
    }, 3000);
  } catch (error) {
    return res.json("error happened please try again later");
  }
}
