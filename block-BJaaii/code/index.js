class stack {
    constructor() {
        this.stack = [];
    }
    push(elm) {
        this.stack.push(elm);
        return this.stack;
    }
    pop() {
        this.stack.pop();
        return this.stack;
    }
    peek(index = this.stack.length - 1) {
        return this.stack[index];
    }
    reverse() {
        return this.stack.reverse();
    }
    isEmpty() {
        return !(this.stack.length > 0);
    }
    displayStack() {
        return this.stack.join("");
    }
    get length() {
        return this.stack.length;
    }
}



//- `push`: will accept a value and add to the stack. Stack adds data at the end
//- `pop`: will delete the last element (max index) of the stack
//- `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the last element (last index)
//- `reverse`: will reverse all the elements of the stack and return the reversed stack
//- `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
//- `displayStack`: returns all the data in stack in string format

class queue {
    constructor() {
        this.queue = [];
    }
    enqueue(elm) {
        this.queue.push(elm);
        return this.queue;
    }
    dequeue() {
        this.queue.splice(0, 1);
        return this.queue;
    }
    peek(index = 0) {
        return this.queue[index];
    }
    isEmpty() {
        return !(this.queue.length > 0);
    }
    displayQueue() {
        return this.queue.join("");
    }
    get length() {
        return this.queue.length;
    }
}

//`queue`//
//`enqueue`(item): Adds the item at the end of the queue
//`dequeue`: Removes an item from the top of the queue
//`peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the first element from top (index 0)
//`isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
//`displayQueue`: returns all the data in stack in string format

