class Node {
    constructor() {
        // this.root = null;
        this.children = {};
        this.isEndOfLine = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insert(word) {

        let current = this.root;
        for (const char of word) {
            if (current.children[char] === undefined) {
                current.children[char] = new Node(char);
            }
            current = current.children[char];
        }
        current.isEndOfLine = true;
    }

    search(word) {
        let current = this.root;
        for (const char of word) {
            if (current.children[char] === undefined) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfLine;
    }
}




// const obj = new Trie();

// obj.insert("cat");
// obj.insert("dog");
// obj.insert("rat");





// console.log(obj.root.children);

// console.log(obj.search("cow"));


class Node {
    constructor() {
        this.children = {};
        this.isEndOfLine = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let current = this.root;

        for (const char of word) {
            if (current.children[char] === undefined) {
                current.children[char] = new Node();
            }
            current = current.children[char];
        }
        current.isEndOfLine = true;
    }
    search(word) {
        let current = this.root;
        for (const char of word) {
            if (current.children[char] === undefined) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

const obj = new Trie();
obj.insert("cat");
obj.insert("dog");
obj.insert("rat");
obj.insert("tac");


// // console.log(obj.root.children);
// // console.table(obj.root.children);
console.log(JSON.stringify(obj.root.children,null,2));
console.log(obj.search("cat"));















// insert(word) {
//     let current = this.root;
//     for (const char of word) {
//         if (current.children[char] === undefined) {
//             current.children[char] = new Node();
//         }
//         current = current.children[char];
//     }
//     current.isEndOfLine = true;
// }

// search(word) {
//     let current = this.root;
//     for (const char of word) {
//         if (current.children[char] === undefined) {
//             return false;
//         }
//         current = current.children[char];
//     }
//     return true;
// }