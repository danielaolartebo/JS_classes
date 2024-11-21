# Classes

## Write functions for working functions

## Before we start

1. This practical task is verified automatically with tests.
2. Please, don't change the page structure, if it is not required for a task. It may affect tests.


## Task Requirements

Please, note you should edit the `src/script.js` file. We can't verify your solution if you use a different file.

For a function creation, it is mandatory to use `Function Declaration` or we will not be able to verify them. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Please, note:**

- If task requirement says _Function should **return** <something>_, it should deliberately return the expected value. If you show it in the console, instead of returning a value it will not pass the check. More about function returning a value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### Requirements for the task

### Roles

Implement the functionality to create roles. Each role is defining by its type (`Guest`, `User`, `Admin`)

| Type  | constructor              | getTask                                                            | createTask                              | changeType            |
| ----- | ------------------------ | ------------------------------------------------------------------ | --------------------------------------- | --------------------- |
| Guest | method, gets tasks array | method, gets tasks id (array index), returns task from tasks array | should not be defined                   | should not be defined |
| User  | method, gets tasks array | method, gets tasks id (array index), returns task from tasks array | method, add new task to the tasks array | should not be defined |

| Type  | constructor                            | getArray                                 | changeType                                                                                                                                                                                                         |
| ----- | -------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Admin | method, gets array of guests and users | method, return array of guests and users | method, gets a number (array index), modify array item at provided index (change object type from guest to user and otherwise, tasks should be migrated from one type to another), returns modified array of items |

For example:

```js
const guest = new Guest([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

guest.getTask(0); // { name: 'task name 1' }
guest.getTask(2); // { name: 'task name 3' }
guest.createTask(new Task("task name 4")); // taskName is not defined, should not work

const user = new User([
  new Task("task name 1"),
  new Task("task name 2"),
  new Task("task name 3"),
]);

user.getTask(0); // { name: 'task name 1' }
user.getTask(2); // { name: 'task name 3' }
user.createTask(new Task("task name 4"));
user.getTask(3); // {name: 'task name 4'}

const admin = new Admin([
  new Guest([]),
  new Guest([new Task("task name 1")]),
  new User([]),
  new User([new Task("task name 2")]),
]);

admin.getArray(); // [Guest, Guest, User, User]
admin.changeType(1);
admin.getArray(); // [Guest, User, User, User]
```
