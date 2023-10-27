/**
 * Linked lists are a type of data structure that store values in the form of a list.
 * Within the list, each value is considered a node, and each node is connected with the following value in the list
 *  (or null in case the element is the last in the list) through a pointer.
 */

/**
 * There are two kinds of linked lists, singly linked lists and doubly linked lists.Both work very similarly, 
 * but the difference is in singly linked lists each node has a single pointer that indicates the next node on the list.
 * While in doubly linked lists, each node has two pointers, one pointing to the next node and another pointing to the previous node.
 */

/**
 * The first element of the list is considered the head, and the last element is considered the tail. Like with arrays, 
 * the length property is defined as the number of elements the list contains.
 */

/**
 * Lists don't have indexes. Each value only "knows" the values to which it's connected through pointers.
 * Since lists don't have indexes, we can't access values randomly. When we want to access a value, 
 we always have to look for it by iterating through the list starting from its head or tail.
 * The good thing of not having indexes, is that insertion/deletion in any part of the list is more efficient than with arrays. 
 We just have to redirect the pointers of the "neighbor" values, while in arrays, values need to be re-indexed.
 */

/**
 * Like any data structure, different methods are implemented in order to operate over the data. 
 * The most common ones include: push, pop, unshift, shift, get, set, insert, remove, and reverse
 */

// Doubly linked list example 

// We create a class for each node within the list
class Node {
    // Each node has three properties, its value, a pointer that indicates the node that follows and a pointer that indicates the previous node
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// We create a class for the list
class DoublyLinkedList {
    // The list has three properties, the head, the tail and the list size
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // The push method takes a value as parameter and assigns it as the tail of the list
    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    // The pop method removes the tail of the list
    pop() {
        if (!this.head) return undefined
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    // The shift method removes the head of the list
    shift() {
        if (this.length === 0) return undefined
        const oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    // The unshift method takes a value as parameter and assigns it as the head of the list
    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    // The get method takes an index number as parameter and returns the value of the node at that index
    get(index) {
        if (index < 0 || index >= this.length) return null
        let count, current
        if (index <= this.length / 2) {
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }
    // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index, val) {
        var foundNode = this.get(index)
        if (foundNode != null) {
            foundNode.val = val
            return true
        }
        return false
    }
    // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)

        var newNode = new Node(val)
        var beforeNode = this.get(index - 1)
        var afterNode = beforeNode.next

        beforeNode.next = newNode, newNode.prev = beforeNode
        newNode.next = afterNode, afterNode.prev = newNode
        this.length++
        return true
    }
}

const doubly = DoublyLinkedList

doubly.push("value1")
doubly.push("value2")
doubly.push("value3")

console.log(doubly.head)
console.log(doubly.tail)
console.log(doubly.length)

doubly.push("value4")
console.log(doubly.pop())

doubly.push("value5")
console.log(doubly.shift())

console.log(doubly.unshift(10));
console.log("this is head", doubly.head)
console.log("this is tail", doubly.tail)
console.log(doubly.length)

console.log("this is second index value", doubly.get(2));
console.log("this is head", doubly.head)
console.log("this is tail", doubly.tail)
console.log(doubly.length)

console.log("Set the value of a node at a specific index in the list:", doubly.set(2, 'value6'));
console.log("this is head", doubly.head)
console.log("this is tail", doubly.tail)
console.log(doubly.length)

console.log("Insert a new node at a specific index in the list:", doubly.insert(2, 'value7'));
console.log("this is head", doubly.head)
console.log("this is tail", doubly.tail)
console.log(doubly.length)


/**
 * The big O of stack methods is the following:-
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */