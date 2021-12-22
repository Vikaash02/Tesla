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
        this.head.unshift(new Node(value))
        this.incrementLength()

        if(this.head[1]) {
            this.head[0].next = this.head[1]
        } else {
            this.head[0].next = null
        }
    }

    append(value) {
        this.head.push(new Node(value))
        this.incrementLength()

        if(this.head[1]) {
            this.head[this.length - 2].next = this.head[length - 1]
        } else {
            this.head[0].next = null
        }
    }

    insertAfter(index, value) {
        if(index == (this.length - 1)) {
            this.append(value)
        } else if((index >= this.length) || (index < 0)) {
            this.throwError("Reference index for insertAfter() does not exist!")
        } else {
            this.head.splice(index, 0, new Node(value))
            this.incrementLength()
        }
    }

    insertBefore(index, value) {
        if(index == 0) {
            this.prepend(value)
        } else if((index >= this.length) || (index <= 0)) {
            this.throwError("Reference index for insertAfter() does not exist!")
        } else {
            this.head.splice(index, 0, new Node(value))
            this.incrementLength()
        }
    }    
}

let test_linkedList = new LinkedList()

test_linkedList.append(3)
test_linkedList.prepend(6)
test_linkedList.insertAfter(0, 5)
test_linkedList.insertBefore(1, 3)

console.log(test_linkedList.join())
