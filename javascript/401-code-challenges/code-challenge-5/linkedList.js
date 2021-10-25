'use strict';

class Node {
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class LinkedList {
    constructor(node = null) {
        this.head=node;
    }

    insert(value){
        let node = new Node (value);
        if(!this.head){
            this.head = node
        }else {
            node.next = this.head;
            this.head=node;
        }
        return this
    }


    includes(value){
        let current = this.head;

        while(current) {
            if(current.value === value) {
                return true
            }

            current = current.next
        }
        return false
    }

    toString(){
        let current = this.head;
        let array = [];
        let string = '';

        if(!current) {
            return('list is empty');
        }

        while(current) {
            array.push(current.value)
            current.next
        } 
        
        array.forEach(index => {
            string =string.concat('{${index}} ->')
            console.log('STRING CONCAT', string)
        })
        string = '${string}NULL'
        return string
    }
}
// const list = new LinkedList(
//     );
    
//     list.head = new Node(10);
//     list.head.next = new Node(25);
//     list.head.next.next = new Node(2);
//     list.head.next.next.next = new Node(13);

module.exports = {Node, LinkedList}