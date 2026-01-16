import fs from "fs";
import Database from "better-sqlite3";

const db = new Database("local.db");
const items = JSON.parse(fs.readFileSync("All.json", "utf8"));

const stmt = db.prepare(`
INSERT OR REPLACE INTO items
(id, name, type, category, description, mastery_req, image_url, stats)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const item of items) {
  stmt.run(
    item.uniqueName,
    item.name,
    item.type ?? null,
    item.category ?? null,
    item.description ?? null,
    item.masteryReq ?? null,
    item.imageName ?? null,
    JSON.stringify(item)
  );
}

console.log("Imported:", items.length);
