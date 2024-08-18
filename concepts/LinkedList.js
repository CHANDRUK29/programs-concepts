// creating the node class
class Node {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}

// creating the LinkedList Class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    //Insert First 
    insertFirst(element) {
        this.head = new Node(element, this.head);
        this.size++;
    }

    // Insert last
    insertLast(element) {
        let node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    //Insert Data At index
    insertAt(element, index) {
        // if index is out of range
        if (index > 0 && index > this.size) {
            return
        }

        //if index is first
        if (index === 0) {
            this.insertFirst(element)
            return
        }

        const node = new Node(element);
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0
        //loop until the element before to index
        while(count < index){
            previous = current; //Node Before Index (i,e)finding the previous node where the element has to be inserted
            count++;
            current = current.next; // Node After the Index
        }
        //assigning the next that is pointers correctly after the node has been inserted at specific postion
        node.next = current;
        previous.next = node;

        this.size++
    }

    // Get at Index
    getAt(index){
        let current = this.head;
        let count =0;

        while(current){
            if(count == index){
                console.log(current.element)
            }
            count++;
            current = current.next;
        }
        return null;
    }

    //print List
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.element)
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertLast(300);
ll.insertLast(400);
ll.insertAt(500,3);

ll.getAt(2)
// ll.printListData();
// console.log(ll)