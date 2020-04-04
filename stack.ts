class Stack {
  item: number[] = []

  push(number: number) {
    this.item.push(number)
  }

  pop() {
    this.item.pop()
  }

  peek() {
    const lastItem = this.item.length - 1

    return this.item[lastItem]
  }

  isEmpty() {
    return this.item.length === 0
  }

  clear() {
    this.item = []
  }

  size() {
    return this.item.length
  }
}


const stack = new Stack()

console.log(stack.item) // []

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.item) // [ 1, 2, 3, 4 ]

console.log(stack.peek()) // 4

stack.pop()

console.log(stack.item) // [ 1, 2, 3 ]

console.log(stack.isEmpty()) // false

console.log(stack.size()) // 3

stack.clear()

console.log(stack.item) // []
