// Queues
// waiting in line at the store

class Queue {
    constructor() {
        this.collection = []
    }

    print = () => {
        console.log(this.collection)
    }

    enqueue = (element) => {
        this.collection.push(element)
    }
    dequeue = () => {
        this.collection.shift()
    }
    front = () => {
        this.collection[0]
    }
    size = () => {
        this.collection.length
    }

    isEmpty = () => {
        return this.collection.length === 0
    }
}

const q = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
q.front()
q.print()


class PriorityQueue {
    constructor() {
        this.collection = []
    }
    printCollections = () => {
        console.log(collection)
    }
    enqueue = (element) => {
        if (this.isEmpty()) {
            this.collection.push()
        } else {
            let added = false
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element)
                    added = true
                    break
                }

            }
            if (!added) {
                this.collection.push(element)
            }
        }
    }

    dequeue = () => {
        let value = this.collection.shift()
        return value[0]
    }
    front = () => {
        this.collection[0]
    }
    size = () => {
        this.collection.length
    }

    isEmpty = () => {
        return this.collection.length === 0
    }
}

const pq = new PriorityQueue()
pq.enqueue(['Beau Carnes', 2])
pq.enqueue(['Quincy Larson', 3])
pq.enqueue(['Briana Swift', 1])
pq.printCollections()
pq.dequeue()
pq.front()
pq.printCollections()
