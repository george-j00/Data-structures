const array = [5,3,22,6,11];



class heap{
    constructor(){
        this.heap = [];
    }

    findthree(value){
        
        let current  = this.root;
        let max ;

        this.heap.push(value)


        while(current > 0 ){

            let left = 2* current + 1;
            let right = 2* current + 2;



            // let parent = Math.floor((current - 1) /2 )

            if (this.heap[right] >  this.heap[current]) {
                max = this.heap[right]
            }
            else{
                max = this.heap[left]
            }
            if(max){
                [this.heap[max] , this.heap[current]] = [this.heap[current] , this.heap[max]]
                
            }

            display()

        }

        
    }

    
}



bfs(){
    
    let result = [];
    let queue = [];


} 


