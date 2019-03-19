import DoubleLinkedList from '../double-linked-list/DoubleLinkedList';
import DoubleLinkedListNode from '../double-linked-list/DoubleLinkedListNode';

export default class LRUCache {
  constructor(maxSize = 20) {
    this.maxSize = maxSize;
    this.currentSize = 0;
    this.map = {};
    this.doubleLinkedList = new DoubleLinkedList();
  }

  add(key, value) {
    if (this.map[key]) {
      this.delete(key);
    }
    if (this.currentSize === this.maxSize) {
      this.delete(this.doubleLinkedList.getTail().getValue().key);
    }
    const node = new DoubleLinkedListNode({ key, value });
    this.map[key] = node;
    this.doubleLinkedList.insert(node, 0);
    this.currentSize += 1;
  }

  lookup(key) {
    const node = this.map[key];
    if (node) {
      this._setKeyAsMostRecentlyAccessed(key);
      return node.getValue().value;
    }
    return null;
  }

  delete(key) {
    const node = this.map[key];
    if (node) {
      delete this.map[key];
      this.doubleLinkedList.delete(node);
      this.currentSize -= 1;
    }
  }

  _setKeyAsMostRecentlyAccessed(key) {
    const node = this.map[key];
    this.doubleLinkedList.delete(node);
    this.doubleLinkedList.insert(node, 0);
  }
}
