const sql = require("better-sqlite3");
const db = sql("meals.db");

async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

module.exports = { getMeals };
