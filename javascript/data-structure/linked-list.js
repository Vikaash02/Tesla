class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = []
        this.length = 0
    }

    insertBefore(value) {
        this.head.unshift(new Node(value))
        this.length++

        if(this.head[1]) {
            this.head[0].next = this.head[1]
        } else {
            this.head[0].next = null
        }
    }

    insertAfter(value) {
        this.head.push(new Node(value))
        this.length++

        if(this.head[1]) {
            this.head[this.length - 2].next = this.head[length - 1]
        } else {
            this.head[0].next = null
        }
    }

    
}
