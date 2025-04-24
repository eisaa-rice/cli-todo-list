# ✅ to-do list CLI

a node.js CLI tool that lets you manage a task list using a local PostgreSQL database, with commands like:

- ➕ add a new task (`--new`)
- ✔️ mark a task as finished (`--done`)
- ➖ delete a task (`--delete`)
- 📋 display the to-do list (`--list`)
- 🗑️ reset the to-do list (`--clear`)
- 📄 show available commands (`--help`)
- 🤖 display app version (`--version`)

## usage

to use this tool:
1. make sure [node.js](https://nodejs.org/en) and [postgresql](https://www.postgresql.org/download/) are installed, clone this repo, and run `npm install`.
2. add your database credentials in a `.env` file:
    ```env
    PGUSER=username
    PGPASSWORD=password
    PGHOST=localhost
    PGPORT=3000
    PGDATABASE=database
    ```

3. run commands like:
    ### --new [task name]
    creates a new task for the to-do list
    ```
    ➕ creating new task
    [
      { task_id: 1, task_name: 'wash dishes', done: false },
      { task_id: 2, task_name: 'clean room', done: false }
      { task_id: 3, task_name: 'fold laundry', done: false },
    ]
    ```
    
    ### --done [id]
    marks a task as finished
    ```
    ✔️ marking task 2 as finished
    [
      { task_id: 1, task_name: 'wash dishes', done: false },
      { task_id: 2, task_name: 'clean room', done: true }
      { task_id: 3, task_name: 'fold laundry', done: false },
    ]
    ```
    
    ### --delete [id]
    removes a task from the list
    ```
    ➖ deleting task 1
    [
      { task_id: 2, task_name: 'clean room', done: true }
      { task_id: 3, task_name: 'fold laundry', done: false },
    ]
    ```

    ### --list [all | pending | done]
    displays items from the list depending on filter criteria
    ```
    ▶️ all tasks:
    [
      { task_id: 2, task_name: 'clean room', done: true }
      { task_id: 3, task_name: 'fold laundry', done: false },
    ]
    ```
    
    ```
    🔁 pending tasks
    [
      { task_id: 3, task_name: 'fold laundry', done: false }
    ]
    ```
    
    ```
    ⏹️ finished tasks
    [
      { task_id: 2, task_name: 'clean room', done: true }
    ]
    ```
     
    ### --clear
    resets the entire list
    ```
    🗑️  emptying to-do list
    []
    ```
    
    ### --help
    prints all commands, what they do, and how to use them
    ```
    --new [task name] : add a new item
    --list [all|pending|done] : display to-do items
    --done [id] : update a to-do item
    --delete [id] : delete a to-do item
    --clear : empty to-do list
    --help : list all the available options
    --version : print program version
    ```

    ### --version
    prints the current cli version
    ```
    🤖 program version: 1.1.1
    ```
