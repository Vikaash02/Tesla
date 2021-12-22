class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.is = 'Node'
    }
}

class LinkedList {
    constructor() {
        this.head = []
        this.length = 0
    }

    returnSelf() {
        return this
    }    

    incrementLength() {
        this.length++
    }

    decrementLength() {
        this.length--
    }

    throwError(e) {
        console.error("Invalid operation: ", e)
    }

    join() {
        let str = ""

        for(let node of this.head) {
            str += node.data + ", "
        }

        return str
    }

    prepend(value) {
        value = (value.is == 'Node') ? value : new Node(value)
        this.head.unshift(value)
        this.incrementLength()

        if(this.head[1]) {
            this.head[0].next = this.head[1]
        } else {
            this.head[0].next = null
        }
    }

    append(value) {
        value = (value.is == 'Node') ? value : new Node(value)
        this.head.push(value)
        this.incrementLength()

        if(this.head[1]) {
            this.head[this.length - 2].next = this.head[length - 1]
        } else {
            this.head[0].next = null
        }
    }

    insertAfter(index, value) {
        value = (value.is == 'Node') ? value : new Node(value)

        if(index == (this.length - 1)) {
            this.append(value)
        } else if((index >= this.length) || (index < 0)) {
            this.throwError("Reference index for insertAfter() does not exist!")
        } else {
            this.head.splice(index + 1, 0, value)
            this.incrementLength()
        }
    }

    insertBefore(index, value) {
        value = (value.is == 'Node') ? value : new Node(value)

        if(index == 0) {
            this.prepend(value)
        } else if((index >= this.length) || (index <= 0)) {
            this.throwError("Reference index for insertAfter() does not exist!")
        } else {
            this.head.splice(index, 0, value)
            this.incrementLength()
        }
    }    
}

let test_node = new Node(3.4)
let test_linkedList = new LinkedList()

test_linkedList.append(test_node)
test_linkedList.prepend(new Node("Hey"))
test_linkedList.insertAfter(0, true)
test_linkedList.insertBefore(2, 4.3)

console.log(test_linkedList.join(), test_linkedList.length)
