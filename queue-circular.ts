const SIZE = 5;

class Queue {
  private list = new Array(SIZE);
  private front = -1;
  private rear = -1;

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    // 1st difference: check if rear is equal with front too
    return (
      (this.front === 0 && this.rear === SIZE - 1) ||
      this.rear + 1 === this.front
    );
  }

  enqueue(data: number) {
    if (this.isFull()) {
      console.log(`queue is full`);
      return;
    }

    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % SIZE; // 2nd difference: fulfill the empty space
    this.list[this.rear] = data;

    console.log(`insert ${data} to queue`);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`queue is empty`);
      return;
    }

    const element = this.list[this.front];

    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;

      console.log(`queue is now empty`);
    } else {
      this.front = (this.front + 1) % SIZE; // 3rd difference: remove with circulation
    }

    console.log(`element ${element} is deleted`);
  }

  // 4th difference: rewrite the stack getter
  display() {
    if (this.isEmpty()) {
      console.log([]);
      return;
    }

    const stack = [];
    let pointer = this.front;

    while (pointer !== this.rear) {
      stack.push(this.list[pointer]);
      pointer = (pointer + 1) % 5;
    }

    stack.push(this.list[pointer]);

    return stack;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.display()); // [1,2,3,4,5]

// this will be skipped because queue is full
queue.enqueue(6);

queue.dequeue();

console.log(queue.display()); // [2,3,4,5]

queue.enqueue(6);

console.log(queue.display()); // [2,3,4,5,6]

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.display()); // []

// this will be skipped because queue is empty
queue.dequeue();
