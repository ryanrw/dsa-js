class LinkNode {
  val: number
  next?: LinkNode

  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class LinkList {
  head?: LinkNode

  constructor() {
    this.head = null
  }

  addAtHead(val: number): void {
    const node = new LinkNode(val)

    if (this.head) {
      const temp = this.head
      this.head = node
      this.head.next = temp

      return 
    }

    this.head = node
  }

  addAtTail(val: number) {
    const node = new LinkNode(val)

    if (!this.head) {
      this.addAtHead(val)

      return
    }

    let currentNode = this.head

    while (currentNode) {
      // hit the deepest linked list
      if (!currentNode.next) {
        currentNode.next = node

        break
      }

      currentNode = currentNode.next
    }
  }
}

const linkList = new LinkList()
linkList.addAtHead(1)
linkList.addAtTail(3)
console.log(linkList) // [1,3]
