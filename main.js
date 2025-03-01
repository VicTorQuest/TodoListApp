var TodoList = /** @class */ (function () {
    function TodoList(todoItems) {
        this.todoItems = todoItems;
    }
    // Adds a new todo item
    TodoList.prototype.addTodo = function (task) {
        this.todoItems.push(task);
        return "Task: '".concat(task.task, "' has been added to the todo list");
    };
    // Marks a todo item as completed
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todoItems.find(function (item) { return item.id === id; });
        if (todo) {
            todo.completed = true;
            return "Todo task: '".concat(todo.task, "' is now completed");
        }
        else {
            return "Todo task with id".concat(id, " was not found in the todo list");
        }
    };
    // Removes a todo item
    TodoList.prototype.removeTodo = function (id) {
        var index = this.todoItems.findIndex(function (item) { return item.id === id; });
        var task = this.todoItems[index].task;
        if (index !== -1) {
            this.todoItems.splice(index, 1);
            return "Todo task '".concat(task, "' has been removed from the todo list");
        }
        else {
            return "Todo task with id".concat(id, " was not found in the todo list");
        }
    };
    // Returns all todo items
    TodoList.prototype.listTodos = function () {
        console.log('All todo items in the todo list:');
        return this.todoItems;
    };
    // filter todos by their completed status
    TodoList.prototype.filterTodoItems = function (completed) {
        var filteredTodoList = this.todoItems.filter(function (item) { return item.completed === completed; });
        console.log("filtered todo list for completed status: ".concat(completed));
        return filteredTodoList;
    };
    // update the task description of a todo item
    TodoList.prototype.updateTodoItem = function (id, taskDescription) {
        var todo = this.todoItems.find(function (item) { return item.id === id; });
        if (todo) {
            var formerTask = todo.task;
            todo.task = taskDescription;
            return "Todo task '".concat(formerTask, "' has now been updated to '").concat(todo.task, "'");
        }
        else {
            return "Todo task with id".concat(id, " was not found in the todo list");
        }
    };
    // clear all completed todos.
    TodoList.prototype.clearAllCompletedTodos = function () {
        var incompletedTask = this.todoItems.filter(function (item) { return !item.completed; });
        console.log('Cleared all completed tasks from todo list, remaining todo items:');
        return incompletedTask;
    };
    return TodoList;
}());
var TodoListApp = new TodoList([{ id: 1, task: 'Solving week 10 task', completed: false, dueDate: new Date() }]);
console.log(TodoListApp.addTodo({ id: 2, task: 'Finish assignment before deadline', completed: true, dueDate: new Date() }));
console.log(TodoListApp.completeTodo(1));
console.log(TodoListApp.removeTodo(2));
console.log(TodoListApp.listTodos());
console.log(TodoListApp.filterTodoItems(true));
console.log(TodoListApp.updateTodoItem(1, 'new task description'));
console.log(TodoListApp.clearAllCompletedTodos());
