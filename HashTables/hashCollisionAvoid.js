class Hash {
    constructor(size) {
        this.items = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let hashVal = 0;

        for (let i = 0; i <= key.length; i++) {
            hashVal += key.charCodeAt(i) % this.items.length;
        }
        return hashVal;
    }

    set(key, value) {

        let index = this._hash(key);
        if (this.items[index]) {
            for (let i = 0; i < this.items[index].length; i++) {
                if (this.items[index][i][0] === key) {
                    this.items[index][i][1] = value;
                    return;
                }
            }
            this.items[index].push([key, value]);
        } else {
            this.items[index] = [];
            this.items[index].push([key, value]);
        }
        this.size++;
    }

    get(key) {
        let index = this._hash(key);
        if (this.items[index]) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[index][i][0] === key) {
                    return this.items[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this._hash(key);
        if (this.items[index] ) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[index][i][0] === key) {
                    this.items[index].splice(i, 1);
                    this.size--;
                    return;
                }
            }
        }
    }


    print() {
        this.items.forEach(([key, value]) => {
            console.log(key, value);
        })
    }
}


const obj = new Hash(50);


obj.set('age', '20');
obj.set('class', 'cse');
obj.set('name', 'goerge');
obj.set('place', 'kannur');

obj.print();
console.log('***********');



// console.log(obj.get('age'));

// obj.remove('class');

// obj.print();

console.log(obj.get('age'));
