import LinkedList from '../LinkedList';

it('empty linked list', () => {
  const linkedList = new LinkedList();
  expect(linkedList.toArray()).toEqual([]);
});

it('push one element', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  expect(linkedList.toArray()).toEqual([1]);
});

it('push three elements', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  expect(linkedList.toArray()).toEqual([1, 2, 3]);
});

it('delete when empty', () => {
  const linkedList = new LinkedList();
  linkedList.delete(1);
  expect(linkedList.toArray()).toEqual([]);
});

it('delete first element', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.delete(1);
  expect(linkedList.toArray()).toEqual([2, 3]);
});

it('delete one element', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.delete(1);
  expect(linkedList.toArray()).toEqual([]);
});

it("delete one element that doesn't exist", () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.delete(2);
  expect(linkedList.toArray()).toEqual([1]);
});

it('delete last element', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.delete(3);
  expect(linkedList.toArray()).toEqual([1, 2]);
});

it('delete repeated element', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(2);
  linkedList.push(0);
  linkedList.push(2);
  linkedList.delete(2);
  expect(linkedList.toArray()).toEqual([1, 0]);
});

it('delete many elements', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(2);
  linkedList.delete(2);
  linkedList.push(3);
  expect(linkedList.toArray()).toEqual([1, 3]);
  linkedList.delete(3);
  expect(linkedList.toArray()).toEqual([1]);
});

it('pop when empty', () => {
  const linkedList = new LinkedList();
  linkedList.pop();
  expect(linkedList.toArray()).toEqual([]);
});

it('pop one element', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.pop();
  expect(linkedList.toArray()).toEqual([]);
});

it('pop two elements', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.pop();
  expect(linkedList.toArray()).toEqual([1]);
  linkedList.pop();
  expect(linkedList.toArray()).toEqual([]);
});

it('exists', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  expect(linkedList.exists(1)).toBe(true);
});

it('not exists', () => {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);
  expect(linkedList.exists(2)).toBe(false);
});

it('insert one element', () => {
  const linkedList = new LinkedList();
  linkedList.insert(1, 0);
  expect(linkedList.toArray()).toEqual([1]);
});

it('insert many elements', () => {
  const linkedList = new LinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(2, 0);
  expect(linkedList.toArray()).toEqual([2, 1]);
  linkedList.insert(3, 1);
  expect(linkedList.toArray()).toEqual([2, 3, 1]);
  linkedList.insert(4, 2);
  expect(linkedList.toArray()).toEqual([2, 3, 4, 1]);
});

it('insert element at tail', () => {
  const linkedList = new LinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(3, 0);
  linkedList.insert(2, 5);
  expect(linkedList.toArray()).toEqual([3, 1, 2]);
});

it('from array', () => {
  const array = [1, 2, 3];
  const linkedList = new LinkedList();
  linkedList.fromArray(array);
  expect(linkedList.toArray()).toEqual(array);
});
