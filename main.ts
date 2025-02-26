interface dateUpdate {
    dueDate: Date;
}

interface TodoItem extends dateUpdate{
    id: number,
    task: string,
    completed: boolean
}

class TodoList {
    todoItems: TodoItem[]

    constructor(todoItems: TodoItem[]) {
        this.todoItems = todoItems;
    }

    // Adds a new todo item
    addTodo(task: TodoItem): string {
        this.todoItems.push(task)
        return `Task: '${task.task}' has been added to the todo list`
    }

    // Marks a todo item as completed
    completeTodo(id: number): string {
        let todo = this.todoItems.find(item => item.id === id)
        if (todo) {
            todo.completed = true
            return `Todo task: '${todo.task}' is now completed`
        } else {
            return `Todo task with id${id} was not found in the todo list`
        }    
    }

    // Removes a todo item
    removeTodo(id: number):string {
        let index = this.todoItems.findIndex(item => item.id === id)
        let task = this.todoItems[index].task
        if (index !== -1) {
            this.todoItems.splice(index, 1);
            return `Todo task '${task}' has been removed from the todo list`
        } else {
            return `Todo task with id${id} was not found in the todo list`
        }
    }

    // Returns all todo items
    listTodos(): TodoItem[] {
        console.log('All todo items in the todo list:')
        return this.todoItems
    }

    // filter todos by their completed status
    filterTodoItems(completed: boolean): TodoItem[] {
        let filteredTodoList = this.todoItems.filter(item => item.completed ===  completed)
        console.log(`filtered todo list for completed status: ${completed}`)
        return filteredTodoList
    }

    // update the task description of a todo item
    updateTodoItem(id: number, taskDescription: string): string {
        let todo = this.todoItems.find(item => item.id === id)
        if (todo) {
            let formerTask = todo.task
            todo.task = taskDescription
            return `Todo task '${formerTask}' has now been updated to '${todo.task}'`
        } else {
            return `Todo task with id${id} was not found in the todo list`
        }
    }

    // clear all completed todos.
    clearAllCompletedTodos(): TodoItem[] {
        let incompletedTask = this.todoItems.filter(item => !item.completed)
        console.log('Cleared all completed tasks from todo list, remaining todo items:')
        return incompletedTask
    }

}


const TodoListApp = new TodoList([{id: 1, task: 'Solving week 10 task', completed: false, dueDate: new Date()}])


console.log(TodoListApp.addTodo({id: 2, task: 'Finish assignment before deadline', completed:true, dueDate: new Date()}))
console.log(TodoListApp.completeTodo(1))
console.log(TodoListApp.removeTodo(2))
console.log(TodoListApp.listTodos())
console.log(TodoListApp.filterTodoItems(true))
console.log(TodoListApp.updateTodoItem(1, 'new task description'))
console.log(TodoListApp.clearAllCompletedTodos())