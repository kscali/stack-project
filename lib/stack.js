// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.top) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length += 1;
    return this.size();
  }

  pop() {
    if (this.length === 0) return null;
    let removed;
    if (this.length === 1) {
      removed = this.top;
      this.top = null;
      this.bottom = null;
    } else {
      removed = this.top;
      let temp = this.top.next;
      this.top = temp;
    }
    this.length -= 1;
    return removed.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
