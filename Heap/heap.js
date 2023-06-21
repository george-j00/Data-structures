// //******** max heap ************ 

// class Heap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);

//         let current = this.heap.length - 1;

//         while (current > 0) {
//             let parent = Math.floor((current - 1) / 2);

//             if (this.heap[current] < this.heap[parent]) {
//                 [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
//                 current = parent;
//             } else {
//                 break;
//             }
//         }
//     }


//     remove() {
//         let n = this.heap.length;
//         let current = 0;

//         [this.heap[0], this.heap[n - 1]] = [this.heap[n - 1], this.heap[0]]

//         let deleted = this.heap.pop();

//         while (2 * current + 1 < n) {

//             let leftIndex = 2 * current + 1;
//             let rightIndex = 2 * current + 2;
//             let minIndex = 0;
//             if (rightIndex < n && this.heap[rightIndex] < this.heap[leftIndex]) {
//                 minIndex = rightIndex;
//             } else {
//                 minIndex = leftIndex;
//             }

//             if (this.heap[minIndex] < this.heap[current]) {
//                 [this.heap[minIndex], this.heap[current]] = [this.heap[current], this.heap[minIndex]];
//                 current = minIndex;
//             } else {
//                 break;
//             }
//         }
//         return deleted;
//     }

//     heapsort(array) {
//         let result = [];

//         for (let i = 0; i < array.length; i++) {
//             this.insert(array[i]);
//         }

//         while (this.heap.length > 0) {
//             result.push(this.remove());
//         }
//         return result;
//     }

//     display() {
//         console.log(this.heap);
//     }
// }

// const obj = new Heap();

// // obj.insert(10);
// // obj.insert(5);
// // obj.insert(20);
// // obj.insert(55);
// // obj.insert(86);
// // obj.insert(99);



// // obj.display();


// // console.log(obj.remove());
// console.log(obj.heapsort([10, 5, 20, 55, 86, 99]));


class Heap{
    constructor(){
        this.heap = [];
    }

    insert(value){ 
        this.heap.push(value);

        let curr  = this.heap.length - 1;

        while(curr > 0){
            let parent = Math.floor((curr - 1)/2);
            if(this.heap[curr] < this.heap[parent])
            {   
                [this.heap[curr],this.heap[parent]] = [this.heap[parent],this.heap[curr]];
                curr = parent;
            }else{
                 break;
            }
        }
    }




    remove(){
        let n = this.heap.length;
        let curr = 0;
        [this.heap[0],this.heap[n - 1]] = [this.heap[n - 1],this.heap[0]];
        let deleted = this.heap.pop();
        while( 2 * curr + 1 < n){
            let leftIndex = 2 * curr  + 1;
            let rightIndex = 2 * curr + 2;
            let minIndex = 0;
            if(rightIndex < n && this.heap[rightIndex] < this.heap[leftIndex]){
                minIndex = rightIndex;
            }else{
                minIndex = leftIndex;
            }

            if(this.heap[minIndex] < this.heap[curr]){
                [this.heap[minIndex], this.heap[curr]] = [this.heap[curr],this.heap[minIndex]];
                curr = minIndex;
            }else{
                break;
            }
        }
        return deleted;
    }

    heapsort(array) {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }

        while (this.heap.length > 0) {
            result.push(this.remove());
        }
        return result;
    }
    
}

const heaps = new Heap();
// // heap.insertHead(10);
// // heap.insertHead(3);
// // heap.insertHead(40);
// // // heap.remove();
// // console.log(heap.heap);
// heap.display()
console.log(heaps.heapsort([2,1,5,6,3]));

console.log(heaps.remove());
