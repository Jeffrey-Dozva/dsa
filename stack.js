let letters = []
const word = "freecodecamp"
let rword = ""

//put letters of words into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
}

//pop off the stack in reverse order

for (var i = 0; i < word.length; i++) {
    rword += letters.pop()
}

if (rword === word) {
    console.log(word + " is a palindrome")
} else {
    console.log(word + " is not a palindrome")
}


// Stacks in ES 6
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {}
    }

    //add a value onto the end of the stack
    push = (value) => {
        this.storage[this.count] = value
        this.count++
    }

    //   removes and returns the value at the end of the stack
    pop = () => {
        if (this.count === 0) {
            return undefined
        }

        this.count--;
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    // returns the size of stack
    size = () => {
        return this.count
    }

    //   return the value at the end of the stack
    peek = () => {
        return this.storage[this.count - 1]
    }

}


let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.peek()

console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.push("Jeffrey")
console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
