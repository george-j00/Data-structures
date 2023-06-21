
class Hash {
    constructor(size) {
        this.items = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i) % this.size;
        }
        return hashValue;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.items[index]) {
            this.items[index] = [];
        }
        this.items[index].push([key, value]);
        // this.items[index] = [key , value];
    }


    get(key) {
        let index = this.hash(key);
        return this.items[index];
    }

    remove(key) {
        let index = this.hash(key);
        this.items.splice(index, 1);
    }

    print() {
        for (let i = 0; i <= this.items.length - 1; i++) {
            if (this.items[i]) {
                console.log(i, this.items[i]);
            }
        }
    }
}

const hashTable = new Hash(10);

hashTable.set('name', 'george');
hashTable.set('age', '20');
hashTable.set('class', 'cse');
hashTable.set('hobby', 'code');
hashTable.set('type', 'cool');


hashTable.print();

console.log("**************");

// console.log(hashTable.get('name'));
// console.log(hashTable.get('age'));

hashTable.remove('name');
hashTable.print();