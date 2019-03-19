export default class LinkedListNode {
  constructor(value, nextLinkedListNode = null) {
    this.value = value;
    this.next = nextLinkedListNode;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getNext() {
    return this.next;
  }

  setNext(newNext) {
    this.next = newNext;
  }
}
