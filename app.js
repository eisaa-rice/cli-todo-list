const process = require("node:process");
const { Client } = require("pg");
const { version } = require("./package.json");
require("dotenv").config();

const client = new Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

const args = process.argv;

(async () => {
  try {
    await client.connect();
    console.log("✅ connected to postgreSQL database\n");

    await client.query(`
      CREATE TABLE IF NOT EXISTS todos (
        task_id SERIAL PRIMARY KEY,
        task_name TEXT NOT NULL,
        done BOOLEAN DEFAULT false
      );
      `);

    const flag = args[2];
    const value = args[3];

    // node app.js --action "value"
    if (flag == "--new") {
      if (!value) {
        throw "no task given\n";
      }
      console.log("➕ creating new task\n");

      await client.query(`INSERT INTO todos (task_name) VALUES ('${value}');`);
    } else if (flag == "--list") {
      if (value == "all") {
        console.log("▶️  all tasks:");

        const res = await client.query(`SELECT * FROM todos;`);
        console.log(res.rows);
        console.log();
      } else if (value == "pending") {
        console.log("🔁 pending tasks");

        const res = await client.query(`SELECT * FROM todos WHERE done=false;`);
        console.log(res.rows);
        console.log();
      } else if (value == "done") {
        console.log("⏹️  finished tasks");

        const res = await client.query(`SELECT * FROM todos WHERE done=true;`);
        console.log(res.rows);
        console.log();
      } else {
        throw "invalid option\n";
      }
    } else if (flag == "--done") {
      if (!value) {
        throw "no task given\n";
      }
      console.log(`✔️  marking task ${value} as finished\n`);

      await client.query(`UPDATE todos SET done=true WHERE task_id=${value};`);
    } else if (flag == "--delete") {
      if (!value) {
        throw "no task given\n";
      }
      console.log(`➖ deleting task ${value}\n`);

      await client.query(`DELETE FROM todos WHERE task_id = ${value};`);
    } else if (flag == "--help") {
      console.log(`📄 here are all the commands:\n`);

      console.log("--new [task name] : to add a new todo item");
      console.log("--list [all|pending|done] : to list the todo items");
      console.log("--done [id] : to update a todo item");
      console.log("--delete [id] : to delete a todo item");
      console.log("--help : to list all the available options");
      console.log("--version : to print the version of the application");
      console.log();
    } else if (flag == "--version") {
      console.log(`🤖 program version: ${version}\n`);
    } else {
      throw "invalid option\n";
    }
  } catch (err) {
    console.error("🚫 " + err);
  } finally {
    await client.end();
    console.log("🔌 disconnected");
  }
})();
