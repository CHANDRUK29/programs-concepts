class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue an item into the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue an item from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      return this.items.shift();
    }
  
    // Peek at the front item of the queue
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print all items in the queue
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.print(); // 10, 20, 30
  console.log(queue.dequeue()); // 10
  console.log(queue.front()); // 20
  queue.print(); // 20, 30
  