# TodoList Application

## Description
This is a simple TypeScript-based Todo List application that allows users to manage their tasks efficiently. The application supports adding, updating, completing, filtering, and removing tasks.

## Features
- Add new todo items
- Mark tasks as completed
- Remove todo items
- List all todo items
- Filter tasks based on completion status
- Update task descriptions
- Clear all completed tasks

## Installation
1. Ensure you have **Node.js** installed.
2. Clone the repository:
   ```sh
   git clone git@github.com:VicTorQuest/TodoListApp.git
   cd <project-folder>
   ```
3. Install dependencies:
   ```sh
   npm install
   npm install -g ts-node
   ```

## Usage
1. Run the script using `ts-node`:
   ```sh
   ts-node main.ts
   ```

## Example
```ts
const myTodoList = new TodoList([]);
console.log(myTodoList.addTodo({ id: 1, task: "Learn TypeScript", completed: false, dueDate: new Date() }));
myTodoList.completeTodo(1);
```

## Requirements
- Node.js
- TypeScript Compiler (`tsc`)
- `ts-node`