export default class DoubleLinkedListNode {
  constructor(value, nextDoubleLinkedListNode = null, previousDoubleLinkedNode = null) {
    this.value = value;
    this.next = nextDoubleLinkedListNode;
    this.previous = previousDoubleLinkedNode;
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

  getPrevious() {
    return this.previous;
  }

  setPrevious(newPrevious) {
    this.previous = newPrevious;
  }
}
