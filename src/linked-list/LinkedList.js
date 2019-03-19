import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  exists(value) {
    let currentNode = this.head;
    let found = false;
    while (currentNode && !found) {
      if (currentNode.getValue() === value) {
        found = true;
      }
      currentNode = currentNode.getNext();
    }
    return found;
  }

  push(value) {
    const node = new LinkedListNode(value);
    if (this._isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.setNext(node);
      this.tail = node;
    }
  }

  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.getNext() === this.tail) {
          currentNode.setNext(null);
          this.tail = currentNode;
        }
        currentNode = currentNode.getNext();
      }
    }
  }

  delete(value) {
    if (this._isEmpty()) return;

    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.getValue() === value) {
        if (currentNode === this.tail) {
          this.tail = previousNode;
        }
        if (currentNode === this.head) {
          this.head = currentNode.getNext();
        } else {
          previousNode.setNext(currentNode.getNext());
        }
      } else {
        previousNode = currentNode;
      }
      currentNode = currentNode.getNext();
    }
  }

  insert(value, position) {
    if (position < 0) return;

    const node = new LinkedListNode(value);
    if (this._isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let i = 0;
      let inserted = false;
      while (currentNode && !inserted) {
        if (i === position) {
          if (currentNode === this.head) {
            this.head = node;
            node.setNext(currentNode);
          } else {
            previousNode.setNext(node);
            node.setNext(currentNode);
          }
          inserted = true;
        }
        i += 1;
        previousNode = currentNode;
        currentNode = currentNode.getNext();
      }
      if (!inserted) {
        this.tail = node;
        previousNode.setNext(node);
      }
    }
  }

  toArray() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.getValue());
      currentNode = currentNode.getNext();
    }
    return array;
  }

  fromArray(array) {
    array.forEach(value => this.push(value));
  }

  _isEmpty() {
    return this.head === null;
  }
}
