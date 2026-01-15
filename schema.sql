CREATE TABLE items (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  category TEXT,
  description TEXT,
  mastery_req INTEGER,
  image_url TEXT,
  stats JSON
);

CREATE INDEX idx_items_name ON items(name);
CREATE INDEX idx_items_type ON items(type);