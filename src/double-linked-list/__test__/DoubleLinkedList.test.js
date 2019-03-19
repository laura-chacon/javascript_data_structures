import DoubleLinkedList from '../DoubleLinkedList';

it('empty double linked list', () => {
  const doubleLinkedList = new DoubleLinkedList();
  expect(doubleLinkedList.toArray()).toEqual([]);
});

it('push one element', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  expect(doubleLinkedList.toArray()).toEqual([1]);
});

it('push three elements', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.push(2);
  doubleLinkedList.push(3);
  expect(doubleLinkedList.toArray()).toEqual([1, 2, 3]);
});

it('delete when empty', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.delete(1);
  expect(doubleLinkedList.toArray()).toEqual([]);
});

it('delete first element', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.push(2);
  doubleLinkedList.push(3);
  doubleLinkedList.delete(1);
  expect(doubleLinkedList.toArray()).toEqual([2, 3]);
});

it('delete one element', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.delete(1);
  expect(doubleLinkedList.toArray()).toEqual([]);
});

it("delete one element that doesn't exist", () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.delete(2);
  expect(doubleLinkedList.toArray()).toEqual([1]);
});

it('delete last element', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.push(2);
  doubleLinkedList.push(3);
  doubleLinkedList.delete(3);
  expect(doubleLinkedList.toArray()).toEqual([1, 2]);
});

it('delete repeated element', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.push(2);
  doubleLinkedList.push(2);
  doubleLinkedList.push(0);
  doubleLinkedList.push(2);
  doubleLinkedList.delete(2);
  expect(doubleLinkedList.toArray()).toEqual([1, 0]);
});

it('delete many elements', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.push(2);
  doubleLinkedList.push(2);
  doubleLinkedList.delete(2);
  doubleLinkedList.push(3);
  expect(doubleLinkedList.toArray()).toEqual([1, 3]);
  doubleLinkedList.delete(3);
  expect(doubleLinkedList.toArray()).toEqual([1]);
});

it('pop when empty', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.pop();
  expect(doubleLinkedList.toArray()).toEqual([]);
});

it('pop one element', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.pop();
  expect(doubleLinkedList.toArray()).toEqual([]);
});

it('pop two elements', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.push(2);
  doubleLinkedList.pop();
  expect(doubleLinkedList.toArray()).toEqual([1]);
  doubleLinkedList.pop();
  expect(doubleLinkedList.toArray()).toEqual([]);
});

it('exists', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  expect(doubleLinkedList.exists(1)).toBe(true);
});

it('not exists', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.push(1);
  doubleLinkedList.push(3);
  doubleLinkedList.push(4);
  doubleLinkedList.push(5);
  expect(doubleLinkedList.exists(2)).toBe(false);
});

it('insert one element', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.insert(1, 0);
  expect(doubleLinkedList.toArray()).toEqual([1]);
});

it('insert many elements', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.insert(1, 0);
  doubleLinkedList.insert(2, 0);
  expect(doubleLinkedList.toArray()).toEqual([2, 1]);
  doubleLinkedList.insert(3, 1);
  expect(doubleLinkedList.toArray()).toEqual([2, 3, 1]);
  doubleLinkedList.insert(4, 2);
  expect(doubleLinkedList.toArray()).toEqual([2, 3, 4, 1]);
});

it('insert element at tail', () => {
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.insert(1, 0);
  doubleLinkedList.insert(3, 0);
  doubleLinkedList.insert(2, 5);
  expect(doubleLinkedList.toArray()).toEqual([3, 1, 2]);
});

it('from array', () => {
  const array = [1, 2, 3];
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.fromArray(array);
  expect(doubleLinkedList.toArray()).toEqual(array);
});
