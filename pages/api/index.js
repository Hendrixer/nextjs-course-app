import nextConnect from "next-connect";

const handler = nextConnect()
  .get((req, res) => {
    res.json({ message: "ok" });
  })
  .post((req, res) => {
    res.json({ message: "posted" });
  });

export default handler;
