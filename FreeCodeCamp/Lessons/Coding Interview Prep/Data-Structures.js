/* CODING INTERVIEW PREP */
/*     FREECODECAMP      */
/* ===================== */

/* DATA STRUCTURES */
/* =============== */

// Typed Arrays
var byteSize = 64;
var buffer = new ArrayBuffer(byteSize);
var i32View = new Int32Array(buffer);
//console.log(i32View);

// Learn how a Stack Works
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line
homeworkStack.pop();
homeworkStack.push("CS50");
//console.log(homeworkStack);

// Create a Stack Class
function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function(val){
        return collection.push(val);
    }
    this.pop = function(){
        return collection.pop();
    }
    this.peek = function(){
        return collection[collection.length-1];
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
    this.clear = function(){
        collection.length = 0;
    }
    // Only change code above this line
}

// Create a Queue Class
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(val) {
        return collection.push(val);
    }
    this.dequeue = function() {
        return collection.pop();
    }
    this.front = function() {
        return collection[0];
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return collection.length === 0;
    }
    // Only change code above this line
}

// Create a Priority Queue Class
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        if (this.collection.length === 0) {
            this.collection.push(item);
        } else if (this.collection.length === 1) {
            if (item[1] >= this.collection[0][1]) {
                this.collection.push(item);
            } else if (item[1] < this.collection[0][1]) {
                this.collection.unshift(item);
            }
        } else if (this.collection.length > 1) {
            var check = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (this.collection[i][1] > item[1]) {
                    if (i === 0) {
                        check = true;
                        this.collection.unshift(item);
                        break;
                    } else {
                        check = true;
                        var sliced = this.collection.slice(0,i);
                        var slicedend = this.collection.slice(i,this.collection.length);
                        sliced.push(item);
                        this.collection=sliced.concat(slicedend);
                        break;
                    }
                }
            }
            if (!check) {
                this.collection.push(item);
            }
        };
    }
    this.dequeue = function() {
        return this.collection.shift()[0];
    };
    this.size = function() {
        return this.collection.length;
    };
    this.isEmpty = function() {
        return this.collection.length === 0 ? true : false;
    };
    this.front = function() {
        return this.collection[0];
    };
    
    // Only change code above this line
}

// Create a Circular Queue
class CircularQueue {
    constructor(size) {
 
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
 
      while (size > 0) {
         this.queue.push(null);
         size--;
      }
 
    }
 
    print() {
      return this.queue;
    }
 
 
    enqueue(item) {
     // Only change code below this line
       if (this.queue[this.write] === null) {
         this.queue[this.write++] = item;
         if (this.write > this.max) {
           this.write = 0;
         }
         return item;
       }
       return null;
     // Only change code above this line
    }
 
    dequeue() {
     // Only change code below this line
       if (this.queue[this.read] !== null) {
         let item = this.queue[this.read];
         this.queue[this.read++] = null;
         if (this.read > this.max) {
           this.read = 0;
         }
         return item;
       }
       return null;
     // Only change code above this line
    }
 }

// Create a Set Class
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // change code above this line
}

// Remove from a Set
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // change code below this line
    this.remove = function(element) {
        if(this.has(element)){
            var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // change code above this line
}

// Size of the Set
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // change code below this line
    this.size = function() {
        return collection.length;
    };
    // change code above this line
}

// Perform a Union on Two Sets
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
   // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the set
    this.size = function() {
        return collection.length;
    };
    // change code below this line
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // change code above this line
}

// Perform an Intersection on Two Sets of Data
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
            var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // change code below this line
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // change code above this line
}

// Perform a Difference on Two Sets of Data
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // change code below this line
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // change code above this line
}

// Perform a Subset Check on Two Sets of Data
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // change code below this line
    this.subset = function(set) {
        var isSubset = true;
        var c = this.values();
        c.forEach(function(e){
            if(!set.has(e)) isSubset = false;
        });
        return isSubset;
    };
    // change code above this line
}

// Create and Add to Sets in ES6
function checkSet() {
    var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
    // change code below this line
    set.add(["Taco","Cat","Awesome"]);
    // change code above this line
    console.log(set);
    return set;
  }
//checkSet();

// Remove items from a set in ES6
function checkSet(){
    var set = new Set([1, 2, 3, 4, 5]); //Create a set with values 1, 2, 3, 4, & 5
    //Remove the value 2
    set.delete(1);
    //Remove the value 5
    set.delete(4);
    //Return the set
    //console.log(set);
    return set;
 }

// Use .has and .size on an ES6 Set
//checkSet([ 1, 2, 3], 2);    // Should return [ true, 3 ]
//checkSet([4, 5, 6], 3);     // Should return [ false, 3 ]
function checkSet(arrToBeSet, checkValue){
    // change code below this line
    var set = new Set(arrToBeSet);
    if (set.has(checkValue) == true) {
        return true;
    } else {
        return false;
    }
    // change code above this line
}

// Use Spread and Notes for ES5 Set() Integration
function checkSet(set){
    // change code below this line
     var newArr = [...set];
     return newArr;
    // change code above this line
 }

// Create a Map Data Structure
var Map = function() {
    this.collection = {};
    // change code below this line
    this.add = (key,value) => {
        this.collection[key] = value;
        return this.collection[key];
    };
    this.remove = (key) => {
        if (this.collection.hasOwnProperty(key)) {
            this.collection.delete(key);
        }
    };
    this.get = (key) => {
        return this.collection[key];
    };
    this.has = (item) => {
        return (this.collection.hasOwnProperty(item));
    };
    this.values = () => {
        let arr = [];
        for (let i in this.collection) {
            arr.push(this.collection[i]);
        }
        return arr;
    }; 
    this.size = () => (Object.keys(this.collection).length);
    this.clear = () => {
        this.collection = {};
    };
    // change code above this line
  };


// Create an ES6 JavaScript Map
let myMap = function() {
    this.collection = {};
    this.count = 0;
    this. size = function() {
        return this.count;
    };
    this.set = function(key, value) {
        this.collection[key] = value;
        this.count++;
    };
    this.has = function(key) {
        return (key in this.collection);
    };
    this.get = function(key) {
        return (key in this.collection) ? this.collection[key] : null;
    };
    this.delete = function(key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        }
    };
    this.values = function() {
        let result = new Array();
        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        };
        return (result.length > 0) ? result : null;
    };
    this.clear = function() {
        this.collection = {};
        this.count = 0;
    };
};

let map = new myMap();
map.set("arms", 2);
map.set("fingers", 10);
map.set("eyes", 2);
map.set("belley button", 1);

console.log("1: ", map.get("fingers"));
console.log("2: ", map.size());
console.log("3: ", map.values());

// Create a Hash Table
// Work with Nodes in a Linked List
// Create a Linked List Class
function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){
      this.element = element; 
      this.next = null; 
    }; 
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      // Only change code below this line
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;
            while(currentNode.next){
            currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
      // Only change code above this line
    };
  }

// Remove Elements from a Linked List
function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){ 
      this.element = element; 
      this.next = null; 
    }; 
  
    this.size = function(){
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
          var currentNode = head;
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
          currentNode.next = node;
      }
      length++;
    }; 
  
    this.remove = function(element){
      // Only change code below this line
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element){
          head = currentNode.next;
        } else {
          while (currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next;
        }
        length--;
      // Only change code above this line
    };
  }

// Search within a Linked List
function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){ // {1} 
      this.element = element; 
      this.next = null; 
    }; 
  
    this.size = function() {
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
          currentNode = head;
  
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
  
          currentNode.next = node;
      }
  
      length++;
    }; 
  
    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
          head = currentNode.next;
      } else {
          while(currentNode.element !== element) {
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next;
      }
      length --;
    };
  
    // Only change code below this line
    this.isEmpty = function() {
      return length === 0;
    };
  
    this.indexOf = function(element) {
      var currentNode = head;
      var index = -1;
      while (currentNode) {
        index++;
        if (currentNode.element === element) {
          return index;
        }
        currentNode = currentNode.next
      }
      return -1;
    };

    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
          count++;
          currentNode = currentNode.next;
        }
        return currentNode.element;
      };  
    // Only change code above this line
  }

// Remove Elements from a Linked List by Index
function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){ // {1} 
      this.element = element; 
      this.next = null; 
    }; 
  
    this.size = function(){
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
          var currentNode = head;
  
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
  
          currentNode.next = node;
      }
  
      length++;
    }; 
  
    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
          head = currentNode.next;
      } else {
          while(currentNode.element !== element) {
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
  
          previousNode.next = currentNode.next;
      }
  
      length --;
    };
  
    // Only change code below this line
    this.removeAt = function(index) {
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
      if (index < 0 || index >= length){
          return null
      }
      if(index === 0){
          head = currentNode.next;
      } else {
          while(currentIndex < index) {
              currentIndex ++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next
      }
      length--;
      return currentNode.element;
    }
    // Only change code above this line
  }

// Add Elements at a Specific Index in a Linked List
function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){
        this.element = element; 
        this.next = null; 
    }; 
  
    this.size = function(){
        return length;
    };
  
    this.head = function(){
        return head;
    };
  
    this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        } else {
            var currentNode = head;

            while(currentNode.next){
                currentNode  = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    }; 
  
    // Only change code below this line
    this.addAt = function (index, element) {
        if (index > length || index < 0) {
          return false;
        }
        var newNode = new Node(element);
        var currentNode = head;
        if (index === 0) {
          head = newNode;
        } else {
          var previousNode = null;
          var i = 0;
          while (currentNode && i < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            i++;
          }
          previousNode.next = newNode;
        }
        newNode.next = currentNode;
        length++;
      }
    // Only change code above this line
}

// Create a Doubly Linked List


// Reverse a Doubly Linked List
// Find the Minimum and Maximum Value in a Binary Search Tree
// Add a New Element to a Binary Search Tree
// Check if an Element is Present in a Binary Search Tree
// Find the Minimum and Maximum Height of a Binary Search Tree
// Use Depth First Search in a Binary Search Tree
// Use Breadth First Search in a Binary Search Tree
// Delete a Leaf Node in a Binary Search Tree
// Delete a Node with One Child in a Binary Search Tree
// Delete a Node with Two Children in a Binary Search Tree
// Invert a Binary Tree
// Create a Trie Search Tree
// Insert an Element into a Max Heap
// Remove an Element from a Max Heap
// Implement Heap Sort with a Min Heap
// Adjacency List
// Adjacency Matrix
// Incidence Matrix
// Breadth-First Search
// Depth-First Search