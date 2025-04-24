# ✅ to-do list CLI

a node.js CLI tool that lets you manage a task list using a local PostgreSQL database, with commands like:

- ➕ add a new task (--new)
- ✔️ mark a task as finished (--done)
- ➖ delete a task (--delete)
- 📋 display the to-do list (--list)
- 🗑️ reset the to-do list (--clear)
- 📄 show available commands (--help)
- 🤖 display app version (--version)

## usage

to use this tool:
1. make sure [node.js](https://nodejs.org/en) and [PostgreSQL](https://www.postgresql.org/download/) are installed, clone this repo, and run `npm install`.
2. add your db credentials in a `.env` file:
  ```env
  PGUSER=username
  PGPASSWORD=password
  PGHOST=localhost
  PGPORT=3000
  PGDATABASE=database
  ```

3. run commands like:
```bash
node app.js --new "buy groceries"
node app.js --list all
node app.js --done 3
node app.js --delete 4
node app.js --help
node app.js --version
```

## results
after a few uses, you may have a list that looks like this:
```
[
  { task_id: 1, task_name: 'run away', done: false },
  { task_id: 2, task_name: 'behind you', done: true },
  { task_id: 3, task_name: 'not safe', done: false },
  { task_id: 5, task_name: 'hide', done: true }
]
```

or did you only want to see what's left:
```
[
  { task_id: 1, task_name: 'run away', done: false },
  { task_id: 3, task_name: 'not safe', done: false }
]
```

or maybe, how far you've come:
```
[
  { task_id: 2, task_name: 'behind you', done: true },
  { task_id: 5, task_name: 'hide', done: true }
]
```

or maybe not, you might've cleared your list (or perhaps never started filling it) and have a list that more closely resembles:
```
[]
```

you may have looked at that the current version instead:
```
program version: 1.1.1
```

or might you be reading the help list, with no clue where to begin:
```
--new [task name] : add a new item
--list [all|pending|done] : display to-do items
--done [id] : update a to-do item
--delete [id] : delete a to-do item
--clear : empty to-do list
--help : list all the available options
--version : print program version
```
