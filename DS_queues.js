/**
 * Queues work in a very similar way to stacks, 
 * but elements follow a different pattern for add and removal. 
 * Queues allow only a FIFO pattern (first in, first out). 
 * In queues, elements can't be added or removed out of order, they always have to follow the FIFO pattern.
 */

/**
 * Some examples of queue usage are:-
 * Background tasks.
 * Printing/task processing.
 * 
 * There's more than one way to implement a queue, 
 * but probably the simplest is using an array with its push(enqueue) and shift(dequeue) methods. 
 * If we only use pop and push for adding and deleting elements, 
 * we'll always follow the FIFO pattern and so operate over it like a queue.
 */

// example 1 

// We create a class for each node within the queue
class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    // The queue has three properties, the first node, the last node and the queue size
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    // The enqueue method receives a value and adds it to the "end" of the queue
    push(val) {
        var newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    // The dequeue method eliminates the element at the "beginning" of the queue and returns its value
    shift() {
        if (!this.first) return null
        var temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const quickQueue = new Queue

quickQueue.push("value1")
quickQueue.push("value2")
quickQueue.push("value3")

console.log(quickQueue.first)
console.log(quickQueue.last)
console.log(quickQueue.size)

quickQueue.push("value4")
console.log(quickQueue.size)
console.log(quickQueue.shift())
console.log(quickQueue.size)


/**
 * The big O of stack methods is the following:-
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */