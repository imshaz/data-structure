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
        return this;
    }

    append(value){
        const newNode = new Node(vlaue);

        if(!this.tail){
            this.head=newNode; 
            this.tail=newNode
            return this;
        }

        const currentTail= this.tail; 
        currentTail.next=this.newNode;
        this.tail=newNode; 
        return this

    }

    delete(value){

        if(!this.head) return 

        let deleteNode=null;
        // check if first node is to be deleted
        if(this.head && this.head.value===value){
            deleteNode=this.head
            this.head= this.head.next; 
            return 
        }

        // create a place holder for current node 
        let currentNode= this.head; 

        if(currentNode.next!=null){
            while(currentNode.next){
                if(currentNode.next.value===value){
                    // if last element to be deleted
                    if(this.tail===currentNode){
                        this.tail=currentNode
                    }
                    deleteNode= currentNode.next; 
                    currentNode.next= currentNode.next.next;                     
                    return
                }
                else{
                    currentNode=currentNode.next
                }
            }
        }

        return 

    }

    delteTail(){
        if(this.head===this.tail){
            this.head=null; 
            this.tail=null; 
        }
        let deleteNode=this.tail; 
        let currentNode=this.head; 

        while(currentNode.next){
            if(!currentNode.next.next){
                currentNode.next=null; 
            }else{
                currentNode=currentNode.next
            }
        }
        this.tail=currentNode;
        return deleteNode
    }

    deleteHead(){
        if(!this.head){
            return null
        }
        let deletedNode = this.head; 
        if(!this.head.next){
            this.head=null; 
            this.tail=null; 
            return
        }

        this.head= this.head.next; 
        return deletedNode;
                
    }
}