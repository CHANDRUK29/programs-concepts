class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push an item onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop an item from the stack
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
      }
      return this.items.pop();
    }
  
    // Peek at the top item of the stack
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print all items in the stack
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.print(); // 10, 20, 30
  console.log(stack.pop()); // 30
  console.log(stack.peek()); // 20
  stack.print(); // 10, 20
  