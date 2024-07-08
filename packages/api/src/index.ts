import axios from "axios";
import { createServer } from "./server";

const port = process.env.PORT || 5001;
const server = createServer();

server.get("/search", async function (req, res) {
  const destination = req.query.destination || "Phuket";
  const travel_days = req.query.travel_days || "4 days";
  const interests = req.query.interests || "Family-Friendly";
  const { data } = await axios.post(
    "https://www.buildai.space/api/results?appId=5KrHivL0dPGT2TVXKrzv",
    {
      search: {
        userInput: "",
        fieldsValues: {
          travel_days: travel_days,
          destination: destination,
          interests: interests,
        },
      },
      fieldsMetadata: [],
    }
  );
  res.send(data);
});

server.listen(port, () => {
  console.log(`api running on ${port}`);
});
