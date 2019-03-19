import DoubleLinkedListNode from './DoubleLinkedListNode';

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getTail() {
    return this.tail;
  }

  exists(value) {
    const node = typeof value === 'object' ? value : new DoubleLinkedListNode(value);
    let currentNode = this.head;
    let found = false;
    while (currentNode && !found) {
      if (currentNode.getValue() === node.getValue()) {
        found = true;
      }
      currentNode = currentNode.getNext();
    }
    return found;
  }

  push(value) {
    const node = new DoubleLinkedListNode(value);
    if (this._isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.setNext(node);
      node.setPrevious(this.tail);
      this.tail = node;
    }
  }

  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.getPrevious();
      this.tail.setNext(null);
    }
  }

  delete(value) {
    if (this._isEmpty()) return;

    if (typeof value === 'object') {
      this._deleteNode(value);
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.getValue() === value) {
          this._deleteNode(currentNode);
        }
        currentNode = currentNode.getNext();
      }
    }
  }

  insert(value, position) {
    if (position < 0) return;

    const node = typeof value === 'object' ? value : new DoubleLinkedListNode(value);
    if (this._isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let currentNode = this.head;
      let i = 0;
      let inserted = false;
      while (currentNode && !inserted) {
        if (i === position) {
          if (currentNode === this.head) {
            this.head = node;
            node.setNext(currentNode);
            currentNode.setPrevious(node);
          } else {
            currentNode.getPrevious().setNext(node);
            node.setPrevious(currentNode.getPrevious());
            node.setNext(currentNode);
            currentNode.setPrevious(node);
          }
          inserted = true;
        }
        i += 1;
        currentNode = currentNode.getNext();
      }
      if (!inserted) {
        this.tail.setNext(node);
        node.setPrevious(this.tail);
        this.tail = node;
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

  _deleteNode(node) {
    if (node === this.head) {
      this.head = node.getNext();
      if (this.head) {
        this.head.setPrevious(null);
      }
    } else {
      node.getPrevious().setNext(node.getNext());
    }
    if (node === this.tail) {
      this.tail = node.getPrevious();
      if (this.tail) {
        this.tail.setNext(null);
      }
    } else {
      node.getNext().setPrevious(node.getPrevious());
    }
  }
}
