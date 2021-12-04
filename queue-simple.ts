const SIZE = 5

class Queue {
  private list = new Array(SIZE)
  private front = -1
  private rear = -1

  isEmpty() {
    return this.front === -1
  }

  isFull() {
    return this.front === 0 && this.rear === SIZE - 1
  }

  enqueue(data: number) {
    if (this.isFull()) {
      console.log(`queue is full`)
      return
    }

    if (this.front === -1) this.front = 0
    this.rear += 1
    this.list[this.rear] = data

    console.log(`insert ${data} to queue`)
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log(`queue is empty`)
      return
    }

    const element = this.list[this.front]

    if (this.front >= this.rear) {
      this.front = -1
      this.rear = -1

      console.log(`queue is now empty`)
    } else {
      this.front += 1
    }

    console.log(`element ${element} is deleted`)
  }

  display() {
    if (this.isEmpty()) {
      console.log([])
      return
    }

    const stack = []

    for (let i = this.front; i <= this.rear; i++) {
      stack.push(this.list[i])
    }

    console.log(stack)
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

queue.display() // [1,2,3,4,5]

// this will be skipped because queue is full
queue.enqueue(6)

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()

queue.display() // []

// this will be skipped because queue is empty
queue.dequeue()
