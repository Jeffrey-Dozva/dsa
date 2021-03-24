class mySet {
    constructor() {
        this.collection = []
    }
    // this method will check the presence of an element
    has = (element) => {
        return this.collection.indexOf(element) !== -1
    }

    // this method will return all the values in the set
    values = () => this.collection

    // this method will add an element to the set
    add = (element) => {
        if (!this.has(element)) {
            this.collection.push(element)
            return true
        }
        return false
    }

    // this element will remove an element
    remove = (element) => {
        if (this.has(element)) {
            let index = this.collection(element)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }

    // this method will return the size of the collection
    size = () => this.collection.length

    // this method will return the union of two sets
    union = (otherSet) => {
        let unionSet = new Set();
        const firstSet = this.values()
        const secondSet = otherSet.values()

        firstSet.forEach(e => {
            unionSet.add(e)
        })
        secondSet.forEach(e => {
            unionSet.add(e)
        })

        return unionSet
    }

    // this method will return the intersection of two sets as a new set
    intersection = (otherSet) => {
        let intersectionSet = new Set()
        const firstSet = this.values()

        firstSet.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.add(e)
            }
        })
        return intersectionSet
    }

    // this method will return the difference of two sets as a new set
    difference = (otherSet) => {
        let differenceSet = new Set()
        const firstSet = this.values()

        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.add(e)
            }
        })
        return differenceSet
    }

    subset = (otherSet) => {
        const firstSet = this.values()
        return firstSet.every(value => {
            return otherSet.has(value)
        })
    }
}


let setA = new mySet()
let setB = new mySet()

setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")

console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())

// using the default Set
let setC = new Set()
let setD = new Set()

setC.add("a")
setD.add("b")
setD.add("c")
setD.add("a")
setD.add("d")

console.log(setD.values())
setD.delete("a")
console.log(setD.has("a"))
console.log(setD.add("d"))