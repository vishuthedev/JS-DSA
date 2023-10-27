/**
 * trees :- Trees are a data structures that link nodes in a parent/child relationship,
 * in the sense that there're nodes that depend on or come off other nodes.
 */

/** 
 * Trees are formed by a root node (the first node on the tree), 
 * and all the nodes that come off that root are called children. 
 * The nodes at the bottom of the tree, which have no "descendants", are called leaf nodes. 
 * And the height of the tree is determined by the number of parent/child connections it has
*/

/**
 * Unlike linked lists or arrays, trees are non linear,
 * in the sense that when iterating the tree, 
 * the program flow can follow different directions within the data structure and hence arrive at different values.
 * 
 * While on linked lists or arrays, 
 * the program can only iterate the data structure from one extreme of it to the other, always following the same path.
 */

/**
 * An important requirement for tree formation is that the only valid connection between nodes is from parent to child . 
 * Connection between siblings or from child to parent are not allowed in trees (these types of connections form graphs, 
 * a different type of data structure). Another important requirement is that trees must have only one root.
 */

/**
 * Some examples of tree usage in programming are:-
 * The DOM model.
 * Situation analysis in artificial intelligence.
 * File folders in operating systems.
 */

/**
 * There're many different types of trees. In each type of tree, 
 * values may be organized following different patterns that make this data structure more 
 * suitable to use when facing different kinds of problems. The most commonly used types of trees are binary trees and heaps.
 */

// Binary tree :- Binary trees are a type of tree in which each node has a maximum of two children.

// We create a class for each node within the tree
class Node {
    // Each node has three properties, its value, a pointer that indicates the node to its left and a pointer that indicates the node to its right
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
// We create a class for the BST
class BinarySearchTree {
    // The tree has only one property which is its root node
    constructor() {
        this.root = null
    }
    // The insert method takes a value as parameter and inserts the value in its corresponding place within the tree
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value === current.value) return undefined
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
    // The find method takes a value as parameter and iterates through the tree looking for that value
    // If the value is found, it returns the corresponding node and if it's not, it returns undefined
    find(value) {
        if (this.root === null) return false
        let current = this.root,
            found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return undefined
        return current
    }
    // The contains method takes a value as parameter and returns true if the value is found within the tree
    contains(value) {
        if (this.root === null) return false
        let current = this.root,
            found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
}
const bst = new BinarySearchTree();

// Inserting elements
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(12);
bst.insert(20);

// Searching for a value
const foundNode = bst.find(15);
console.log(foundNode);

// Checking if a value is present in the tree
console.log(bst.contains(12));

bst.insert(3);
bst.insert(7);

// Checking the tree after insertions
console.log(bst); 