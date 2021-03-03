import "aoife";
import { App } from "./app";
import { NanoIndexed } from "../../lib";

const db = NanoIndexed({
  dbName: "fish",
  store: "fish2",
  autoIncrement: true,
  // keyPath: "/user",
});

db.set("/user", { id: "/user", haaa: 20 });
db.get("/user");

document.body.append(<App />);
