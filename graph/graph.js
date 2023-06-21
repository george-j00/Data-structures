class Graph {
    constructor() {
        this.adjacentList = {};
    }
    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            // this.adjacentList[vertex] = [];

            //*** using set*** 
            this.adjacentList[vertex] = new Set();
        }
    }
    addConnection(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacentList[vertex2]) {
            this.addVertex(vertex2);
        }
        // this.adjacentList[vertex1].push(vertex2);
        // this.adjacentList[vertex2].push(vertex1);

        // *** using set ****
        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }


    checkEdge(vertex1, vertex2){
        if (this.adjacentList[vertex1].has(vertex2)) {
            return true;
        }else{
            return false;
        }
    }


    deleteEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].delete(vertex2);
        this.adjacentList[vertex2].delete(vertex1);
    }

    deleteVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return null;
        }
        for (const vertex2 of this.adjacentList[vertex]) {
            this.deleteEdge(vertex2, vertex)
        }
        delete this.adjacentList[vertex];
    }
}

const obj = new Graph();

obj.addVertex("A");
obj.addVertex("B");
obj.addVertex("C");

obj.addConnection("A", "B");
obj.addConnection("B", "C");
obj.addConnection("A", "D");

obj.display();

// console.log(obj.checkEdge("B", "D"));

console.log("****************");
obj.deleteVertex("B");
console.log("****************");

obj.display();





// deleteEdge(vertex1 , vertex2) {
//     this.adjacentList[vertex1].delete(vertex2);
//     this.adjacentList[vertex2].delete(vertex1);
//  }

//  deleteVertex(vertex){
//      if (!this.adjacentList[vertex]) {
//          return null;
//      }
//      for (const vertex2 of this.adjacentList[vertex]) {
//          this.deleteEdge(vertex2, vertex)
//      }
//      delete this.adjacentList[vertex];
//  }

//  addConnection(vertex1, vertex2) {
//      if (!this.adjacentList[vertex1]) {
//          this.addVertex(vertex1);
//      }
//      if (!this.adjacentList[vertex2]) {
//          this.addVertex(vertex2);
//      }
//      // this.adjacentList[vertex1].push(vertex2);
//      // this.adjacentList[vertex2].push(vertex1);

//      // *** using set ****
//      this.adjacentList[vertex1].add(vertex2);
//      this.adjacentList[vertex2].add(vertex1);
//  }

//  display() {
//      for (let key in this.adjacentList) {
//          if (this.adjacentList[key]) {
//              console.log(key, " ->", this.adjacentList[key]);
//          }
//      }
//  }

//  //*****************method 1*******************

//  // checkEdge(vertex1, vertex2) {
//  //    for (let i = 0; i < this.adjacentList[vertex1].length; i++) {
//  //     if (this.adjacentList[vertex1][i] === vertex2 ) {
//  //         return true;
//  //     }
//  //    }
//  //    return false;
//  // }

//  //*****************method 2*******************

//  // checkEdge(vertex1, vertex2) {
//  //     let values = Object.values(this.adjacentList[vertex1]);
//  //     if (values.includes(vertex2)) {
//  //         return true;
//  //     }else{
//  //         return false;
//  //     }
//  // }

//  //*****************method 3 using set*******************
//  checkEdge(vertex1, vertex2){
//      if (this.adjacentList[vertex1].has(vertex2)){
//          return true;
//      }else{
//          return false;
//      }
//  }
