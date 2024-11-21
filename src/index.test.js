const { Guest, Task, User, Admin } = require("./script");

describe("Classes", () => {
    describe("Guest", () => {
        it("should have method getTask", async () => {
            const guest = new Guest([
                new Task("task name 1"),
                new Task("task name 2"),
                new Task("task name 3"),
            ]);
            expect(guest.getTask(0).name).toEqual("task name 1");
            expect(guest.getTask(2).name).toEqual("task name 3");
        });

        it("should not implement method createTask", () => {
            const guest = new Guest([]);
            expect(guest.createTask).toThrow(
                "method 'createTask' is not defined"
            );
        });

        it("should not implement method changeType", () => {
            const guest = new Guest([]);
            expect(guest.changeType).toThrow(
                "method 'changeType' is not defined"
            );
        });
    });

    describe("User", () => {
        let user;
        beforeEach(() => {
            user = new User([
                new Task("task name 1"),
                new Task("task name 2"),
                new Task("task name 3"),
            ]);
        });

        it("should have method getTask", () => {
            expect(user.getTask(0).name).toEqual("task name 1");
            expect(user.getTask(2).name).toEqual("task name 3");
        });

        it("should have method createTask", () => {
            expect(user.getTask(0).name).toEqual("task name 1");
            expect(user.getTask(2).name).toEqual("task name 3");
            user.createTask(new Task("task name 4"));
            expect(user.getTask(3).name).toEqual("task name 4");
        });

        it("should not implement method changeType", () => {
            const user = new Guest([]);
            expect(user.changeType).toThrow(
                "method 'changeType' is not defined"
            );
        });
    });

    describe("Admin", () => {
        let admin;
        beforeEach(() => {
            admin = new Admin([
                new Guest([]),
                new Guest([new Task("task name 1")]),
                new User([]),
                new User([new Task("task name 2")]),
            ]);
        });

        it("should have method getArray", () => {
            expect(admin.getArray().length).toEqual(4);
        });

        it("should return instance of Guest as a first element by the method getArray", () => {
            expect(admin.getArray()[0]).toEqual({ tasks: [] });
        });

        it("should return instance of User as a third element by the method getArray", () => {
            expect(admin.getArray()[3]).toEqual({
                tasks: [{ name: "task name 2" }],
            });
        });

        it("should return array of roles by the method getArray", () => {
            expect(admin.getArray()).toEqual([
                { tasks: [] },
                { tasks: [{ name: "task name 1" }] },
                { tasks: [] },
                { tasks: [{ name: "task name 2" }] },
            ]);
        });

        it("should change type of role from Guest to User", () => {
            expect(admin.getArray()[0] instanceof Guest).toEqual(true);
            admin.changeType(0);
            expect(admin.getArray()[0] instanceof User).toEqual(true);
        });

        it("should change type of role from User to Guest", () => {
            expect(admin.getArray()[3] instanceof User).toEqual(true);
            admin.changeType(3);
            expect(admin.getArray()[3] instanceof Guest).toEqual(true);
        });

        it("should move tasks from Guest to User, when change role", () => {
            expect(admin.getArray()[1].getTask(0)).toEqual({
                name: "task name 1",
            });
            admin.changeType(1);
            expect(admin.getArray()[1].getTask(0)).toEqual({
                name: "task name 1",
            });
        });
    });
});
