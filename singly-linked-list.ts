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

  addAtIndex(index: number, val: number) {
    if (this.head === null && index === 0) {
      const node = new LinkNode(val)

      this.head = node

      return
    }

    let currentIndex = 0
    let currentNode = this.head
    let nodeBefore: LinkNode

    while (currentNode) {
      if (currentIndex !== index) {
        nodeBefore = currentNode
        currentNode = currentNode.next
        currentIndex = currentIndex + 1

        continue
      }

      const node = new LinkNode(val)

      node.next = currentNode

      nodeBefore.next = node

      break
    }
  }

  deleteAtIndex(index: number) {
    if (index === 0) {
      this.head = this.head.next

      return
    }

    let currentNode = this.head
    let currentIndex = 0
    let nodeBefore: LinkNode

    while (currentNode) {
      if (currentIndex !== index) {
        nodeBefore = currentNode
        currentNode = currentNode.next
        currentIndex = currentIndex + 1

        continue
      }

      currentNode = currentNode.next ? currentNode.next : null
      nodeBefore.next = currentNode

      break
    }
  }
}

const linkList = new LinkList()
linkList.addAtHead(1)
linkList.addAtTail(3)
console.log(linkList) // [1,3]
