
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    insert(node) {
        const newNode = new Node(node);
        if (this.root === null) {
            this.root = newNode;
            return
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
                return
            }
            this.insertNode(node.left, newNode)
        } else {
            if (node.right === null) {
                node.right = newNode;
                return
            }
            this.insertNode(node.right, newNode)
        }
    }

    search(value) {

        if (this.root === null) {
            return null;
        }

        let temp = this.root;

        while (temp) {
            if (temp.value === value) {
                return true;
            } else if (value < temp.value) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return false;
    }
    // preOrder(root) {
    //     if (root) {
    //         console.log(root.value);
    //         this.preOrder(root.left);
    //         this.preOrder(root.right);
    //     }
    // }

    // postOrder(root) {
    //     if (root) {
    //         this.postOrder(root.left);
    //         this.postOrder(root.right);
    //         console.log(root.value);
    //     }
    // }


    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

//   inorderTraversal(root) {
//         let numbers = []; // Renamed "number" to "numbers" for clarity
    
//         function traverse(node) {
//             if (node) {
//                 traverse(node.left);
//                 numbers.push(node.value);
//                 traverse(node.right);
//             }
//         }
    
//         traverse(root);
//         return numbers;
//     }


    bfs() {
        let queue = [];
        let result = [];
        let curr = this.root;
        queue.push(curr);
        while (queue.length) {
            curr = queue.shift();
            result.push(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        return result;
    }

    // min(root) {
    //     if (!root.left) {
    //         return root.value;
    //     }
    //     else {
    //         return this.min(root.left)
    //     }
    // }
    min(root) {
        while (root.left) {
            root = root.left;
        }
        return root.value;
    }

    max(root) {
        if (!root.right) {
            return root.value;
        }
        else {
            return this.max(root.right)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {

        if (!root) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value);
        }
        return root
    }


    validBst(root) {
        function isValid(root, min, max) {
            if (!root) {
                return true;
            }
            if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
                return false;
            }
            return isValid(root.left, min, root.value) && isValid(root.right, root.value, max);
        }
        return isValid(root, null, null)
    }
}







const obj = new BinarySearchTree();

obj.insert(10);
obj.insert(5);
obj.insert(15);
obj.insert(3);
obj.insert(7);
obj.insert(55);

console.log(obj.inorderTraversal(obj.root));

// console.log(obj.search(6));

// obj.preOrder(obj.root);
// console.log("*****");
// obj.postOrder(obj.root);
// console.log("*****");
// obj.inOrder(obj.root);

// console.log(obj.min(obj.root));
// console.log(obj.max(obj.root));

// console.log(obj.bfs());
// console.log("*****");

// obj.delete(10);
// console.log("*****");

// console.log(obj.bfs());

// console.log(obj.validBst());
