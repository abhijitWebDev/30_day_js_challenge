/* Day-17: Data structures */

/* Activity 1 : Linkedlists */

// Task 1: Implement a node class to represent a element in a linkedlist with properties value and next
class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

// Task 2 : Implement a linkedlist class to add a node to the end, remov the node from the end and display all nodes

// as we have speicified the linked list class above, we will create a addNodeToEnd Method using the prototype.
LinkedList.prototype.addNodeToEnd = function (data) {
    // first we create a new data or node
    const newNode = new Node(data);

    // if the head is null then assign head to the newNode and return
    if(!this.head) {
        this.head = newNode;
        return
    }

    // if thats not the case and data is present in the head then , create a last variable and store the head in that 
    let last = this.head;

    while(last.next) // this means we traverse to the next node or end node
    {
        // we assign or mutate the variable last to last.next
        last = last.next;
    }

    // we assign last.next to newNode
    last.next = newNode;
}

// remove a node from the end 
LinkedList.prototype.deleteNodeFromEnd = function() {
    // if there is no value present in the head simply return
    if(!this.head) {
        return
    }

    // if there is only one node then
    if(!this.head.next) {
        this.head = null; // simple set the value of the head to null
        return
    }

    // if there is secondlast value present
    let secondLast = this.head;

    while(secondLast.next.next) {
        secondLast = secondLast.next;
    }
    secondLast.next = null;


}

// Display all nodes
LinkedList.prototype.displayAllNodes = function() {
    let current = this.head;
    let listValues= [];
    while(current) {
        listValues.push(current.data);
        current = current.next;

    }
    console.log(listValues.join(' -> '))

}

// usage
const list = new LinkedList();

// insert after end
console.log(list.addNodeToEnd(20));
console.log(list.addNodeToEnd(40));
console.log(list.displayAllNodes());
console.log(list.addNodeToEnd(40));
console.log(list.addNodeToEnd(50));
console.log(list.displayAllNodes());
console.log(list.deleteNodeFromEnd());
console.log(list.displayAllNodes());

/* Activity 2 : stack */

// task 3: Implement a stack class with methods push(add element), pop(remove element), peek(view the top element)

class Stack {
    constructor() {
        this.stack = [];
    };

    push(data) {
        this.stack.push(data);
    }

    pop() {
        this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
}

const arr = new Stack();

console.log(arr.push(20));
console.log(arr.push(30));
console.log(arr.peek());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.peek());

// Task 4: Use the stack class to reverse a string by pushing the charecters in the stack and then popping them off

function reverseStack(str) {
    const stack = new Stack();
    
    // Using for-of loop to push all the elements in the stack 
    for (let char of str) {
        stack.push(char);
    }

    // Popping all the elements from the stack
    let reverse = "";
    while (stack.peek() !== undefined) {
        // Storing the popped value of the stack in the reverse variable
        reverse += stack.pop();
    }

    return reverse;
}
const orignalString = 'Hello'
console.log(reverseStack(orignalString)); // olleh

/* Activity 3: Queues */

// Task 5: Implement a queue class with methods enqueue(add element) , dequeue(remove element) and front(view the first element)

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data)
    }

    dequeue() {
        if(this.isEmpty()) {
            return 'Queue is empty'
        }
       return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    front() {
        if(this.isEmpty()) {
            return 'Queue is empty'
        }
        return this.queue[0];
    }
}

const que = new Queue();

console.log(que.enqueue(10));
console.log(que.enqueue(10));
console.log(que.enqueue(20));
console.log(que.front());

console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.front());


// Task 6: Use a queue classto simulate a simple printer queue where print jobs are added to the queue and processed in order
const printerQueue = new Queue();

// Adding jobs to the printer queue
printerQueue.enqueue('print job one');
printerQueue.enqueue('print job two');
printerQueue.enqueue('print job three');

// processing the print jobs in order
console.log(printerQueue.dequeue());
console.log(printerQueue.dequeue());
console.log(printerQueue.dequeue());
console.log(printerQueue.dequeue()); // output queue is empty

/* Activity 4: trees */
//Task 7 :Implement a tree treeNode class to represent a node in a binary tree with properties value, left and right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8: Implement a binary tree class with methods for inserting values and performing in-order traversal to display nodes
class BstNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }


}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        this.root = this.insertNode(this.root, key);
    }

    insertNode(node, key) {
        if(node === null) {
            return new BstNode(key);

        }
        if(key < node.key) {
            node.left = this.insertNode(node.left, key);
        } else {
            node.right = this.insertNode(node.right, key);
        }
        return node;
    }

    inOrderTraversal(node = this.root) {
        if(node !== null) {
            this.inOrderTraversal(node.left)
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(35);
bst.insert(4);

bst.inOrderTraversal();

/* Activity 5: graphs */

// Task 9: Implement a graph class with methods to add vertices, add edges to perform breadth first search(BFS)
class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            return "Vertices not found in the graph";
        }

        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }

    bfs(startingVertex) {
        const visited = {};
        const queue = [startingVertex];
        const result = [];

        visited[startingVertex] = true;

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.vertices[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log(graph.bfs('A')); // Output: ['A', 'B', 'C', 'D']


// Task 10 : User a graph class to represent a simpple network and perform BFS to find the shortest path between two nodes
class GraphOne {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2) {
        if (this.adjacencyList[node1] && this.adjacencyList[node2]) {
            this.adjacencyList[node1].push(node2);
            this.adjacencyList[node2].push(node1);
        }
    }

    shortestPathBFS(startNode, endNode) {
        if (!this.adjacencyList[startNode] || !this.adjacencyList[endNode]) {
            return null;
        }

        let queue = [startNode];
        let visited = new Set();
        let predecessors = {};
        visited.add(startNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();

            if (currentNode === endNode) {
                let path = [];
                let step = endNode;
                while (step !== startNode) {
                    path.push(step);
                    step = predecessors[step];
                }
                path.push(startNode);
                return path.reverse();
            }

            for (let neighbor of this.adjacencyList[currentNode]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    predecessors[neighbor] = currentNode;
                    queue.push(neighbor);
                }
            }
        }

        return null; // No path found
    }
}

// Example usage
const graphNew = new GraphOne();

// Add nodes to the graph
graphNew.addNode('A');
graphNew.addNode('B');
graphNew.addNode('C');
graphNew.addNode('D');
graphNew.addNode('E');

// Add edges to the graph
graphNew.addEdge('A', 'B');
graphNew.addEdge('A', 'C');
graphNew.addEdge('B', 'D');
graphNew.addEdge('C', 'D');
graphNew.addEdge('D', 'E');

// Find the shortest path between node 'A' and node 'E'
const startNode = 'A';
const endNode = 'E';
const path = graphNew.shortestPathBFS(startNode, endNode);

console.log(`Shortest path from ${startNode} to ${endNode}:`, path);



