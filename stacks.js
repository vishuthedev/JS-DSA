/**
 * stacks :- Stacks are a data structure that store information in the form of a list. 
 * They allow only adding and removing elements under a LIFO pattern (last in, first out). 
 * In stacks, elements can't be added or removed out of order, they always have to follow the LIFO pattern
 */

/**
 * Some examples of stack usage are:- 
 * JavaScript's call stack.
 * Managing function invocations in various programming languages.
 * The undo/redo functionality many programs offer.
 * 
 * There's more than one way to implement a stack, 
 * but probably the simplest is using an array with its push and pop methods. 
 * If we only use pop and push for adding and deleting elements, 
 * we'll always follow the LIFO pattern and so operate over it like a stack.
 */

// example 1 

// We create a class for each node within the stack
class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// we create a class for the stack
class Stack {
    // The stack has three properties, the first node, the last node and the stack size
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // The push method receives a value and adds it to the "top" of the stack
    push(val) {
        var newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp;
        }
        return ++this.size
    }

    // The pop method eliminates the element at the "top" of the stack and returns its value
    pop() {
        if (!this.first) return nll
        var temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const stck = new Stack

stck.push("value1")
stck.push("value2")
stck.push("value3")

console.log(stck.first)
console.log(stck.last)
console.log(stck.size)

stck.push("value4")
console.log(stck.size)
console.log(stck.pop());
console.log(stck.size)


/**
 * The big O of stack methods is the following:-
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */