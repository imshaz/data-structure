const Node= require("./linkedListNode")

class LinkedList{

    constructor(){
        this.head=null; 
        this.tail=null
    }

    // add element to to start of node (prepend)
    prepend(value){
        const newNode= new Node(value, this.head);
        this.head=newNode;

        // if this is first element point tail to first elemnent as weel 
        if(!this.tail){
            this.tail=newNode
        }

    }
}