class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.val = null;
    this.next = null;
    this.length = 0;
  }

  addAtStart(data) {
    let newNode = new Node(data);
    //if list is empty adding new node in it
    if (this.head == null) {
      this.head = newNode;
      this.val = this.head.data;
      this.next = null;
    } else {
      //if node is present adding the new node and assigning it
      newNode.next = this.head;
      this.head = newNode;
      this.val = this.head.data;
      this.next = this.head.next;
    }
    this.length = this.length + 1
  }


  addAtEnd(data) {
    let newNode = new Node(data);
    //check if list is empty and addAtStart current node as head
    if (this.head == null) {
      this.head = newNode;
      this.val = this.head.data;
      this.next = this.head.next;
    } else {
      //assigning a pointer to point head
      let ptr = this.head;
      //inorder to insert at last loop through the conditon where the last node contains null
      while (ptr.next !== null) {
        ptr = ptr.next;
      }
      // since the loop exist the last node, so assigning the new node to next for adding the node at end and assign next as null for making it as last node
      ptr.next = newNode;
    }
    this.length = this.length + 1
  }

  addAtPostion(data, postion) {
    let newNode = new Node(data);
    // if head is null create it as new node and assign head
    if (this.head == null) {
      this.head = newNode;
      this.next = null;
    } else {
      // if postion is 1 then we can reuse method addAtStart
      if (postion == 1) {
        this.addAtStart(data)
        return;
      }
      let ptr = this.head;
      let init = 1;
      //looping through the node just before we need to add new node
      while (ptr !== null) {
        // executing if just before one node before the index where we need to add new node (i,e.. if we need to add at postion 3 we will stop at node 2)
        if (init == postion - 1) {
          let after = ptr.next; // next node stored in temp variable
          ptr.next = newNode;
          newNode.next = after;
          return;
        }
        ptr = ptr.next;
        init++
      }
    }
  }

  removeAtStart() {
    if (this.head == null) {
      return;
    }

    //head is first node we are removing first node after assingning the next node as head;
    let removedData = this.head.data;
    this.head = this.head.next;
    this.val = this.head.data;
    this.next = this.head.next;
    this.length = this.length - 1;
    return removedData;
  }


  removeAtLast() {
    if (this.head == null) {
      return;
    }

    let ptr = this.head;
    //looping through the node upto one element before to last node to make last node as null
    while (ptr.next.next !== null) {
      ptr = ptr.next;
    }

    ptr.next = null;
    this.length = this.length - 1;
  }

  removeAtPostion(postion) {
    if (!this.head) {
      return
    }
    // if postion is 1 then we can use removeAtStart
    if (postion == 1) {
      this.removeAtStart();
    } else {
      let ptr = this.head;
      let init = 1
      // executing if just before one node before the index where we need to delete node (i,e.. if we need to add at postion 3 we will stop at node 2)
      while (ptr) {
        if (init == postion - 1) {
          ptr.next = ptr.next.next;
          return;
        }
        ptr = ptr.next
        init++;
      }
    }
  }

  findValue(value) {
    let ptr = this.head;
    while (ptr.next) {
      if (ptr.data === value) {
        return true;
      }
      ptr = ptr.next;
    }
    return false
  }

  print() {
    let ptr = this.head;
    let output = '';
    if (this.head == null) {
      console.log(null)
      return
    }

    while (ptr.next) {
      output += `${ptr.data}--->`;
      ptr = ptr.next;
    }
    output += `${ptr.data}`;
    console.log(output)
  }


  createFromArray(arr) {
    if (!arr.length) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      this.addAtStart(arr[i])

    }
  }

  deleteDuplicates() {
    let ptr = this.head;
    while (ptr !== null) {
      let ptr1 = ptr;
      while (ptr1.next != null) {
        if (ptr1.next.data === ptr.data) {
          ptr1.next = ptr1.next.next;
        } else {
          ptr1 = ptr1.next
        }
      }
      ptr = ptr.next;
    }
  }
}

let ll = new LinkedList();
let ll1 = new LinkedList()

ll.addAtStart(20)
ll.addAtStart(30)
ll.addAtStart(40)
ll.addAtStart(30)
ll.addAtStart(60)
ll.addAtStart(70)
ll.addAtStart(70)
ll.addAtStart(80)
// ll.addAtPostion(100, 7)
// ll.removeAtPostion(3)

// ll1.addAtEnd(20)
// ll1.addAtEnd(30)
// ll1.addAtEnd(40)

// ll.removeAtLast();
// ll.removeAtStart();
ll.deleteDuplicates()
// console.log(ll.findValue(40))
ll.print()

console.log(ll)

console.log(ll1)
