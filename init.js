import app from "./app";

const PORT = 5000;

const handleListening = () =>
  console.log(`✅Listening to http://localhost:${PORT}`);

app.listen(PORT, handleListening);
