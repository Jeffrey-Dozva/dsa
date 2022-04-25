// A hash table is used toimpement assiciative arrays or mapping of key value pairs.
// Hash tables are a  common way of impementing the map map data structure or objects 
// they are widely used because of how efficient they are  avg time for each look up is not tied to the number of elements stored in the table. 
// The avg time comlexity of hash tables  

// Algorithm   Average Worst case
// Space        O(n)        O(n)
// Search       O(1)        O(n)
// Insert       O(1)        O(n)
// Delete       O(1 )       O(n)

// Collision -> if 2 words are hashed to same number ( index )



var hash = (string, max) => {
    var hash = 0 
    for(i =0; i < string.length; i++){
        hash += string.charCodeAt(i)
    }

    return hash % max
}


let HashTable  = function(){
    let storage  = []
    const storageLimit = 4

    this.print = function(){
        console.log(storage)
    }

    this.add=  function (key, value) {
        var index  = hash(key, storageLimit)

        if (storage[index] === undefined) {
            storage[index] = [[key, value]]
        }else{
            var inserted = false
            for (var i = 0; i < storage[index].length; i++) {
                 if (storage[index][i][0] === key) {
                     storage[index][i][1] = value
                     inserted = true
                 }
                 if (inserted === false) {
                     storage[index].push([key, value])
                 }
                
            }
        }
    }

    this.remove = function(key){
        var index  = hash(key, storageLimit)
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index ]
        } else{
            for (var i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i]
                }
                
            }
        }
    }

    this.lookup = function( key){
        var index = hash(key, storageLimit)
        if (storage[index] === undefined) {
            return undefined
        } else {
            for(var i = 0; i < storage[index].length; i++){
                if (storage[index][i][0] === key) {
                    return storage[index][i][1]
                }
            }
        }
    }
}


console.log(hash("beau", 10
))


let ht = new HashTable()
ht.add("beau", "person")
ht.add("fido", "dog")
ht.add("rex", "dinosour")
ht.add("tux", "penguin")

console.log(ht.lookup("tux"))
ht.print()


