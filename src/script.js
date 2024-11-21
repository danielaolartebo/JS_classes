class Task {
    constructor(name) {
        this.name = name;
    }
}

class Guest {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTask(id) {
        return this.tasks[id];
    }

    createTask() {
        throw new Error("method 'createTask' is not defined");
    }

    changeType() {
        throw new Error("method 'changeType' is not defined");
    }
}


class User {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTask(id) {
        return this.tasks[id];
    }

    createTask(task) {
        this.tasks.push(task);
    }

    changeType() {
        throw new Error("method 'changeType' is not defined");
    }
}

class Admin {
    constructor(usersAndGuests) {
        this.usersAndGuests = usersAndGuests;
    }

    getArray() {
        return this.usersAndGuests;
    }

    changeType(index) {
        const item = this.usersAndGuests[index];
        if (item instanceof Guest) {
            // Change Guest to User and migrate tasks
            const user = new User(item.tasks);
            this.usersAndGuests[index] = user;
        } else if (item instanceof User) {
            // Change User to Guest and clear tasks
            const guest = new Guest(item.tasks);
            this.usersAndGuests[index] = guest;
        }
    }
}

module.exports.Task = Task;
module.exports.Guest = Guest;
module.exports.User = User;
module.exports.Admin = Admin;

