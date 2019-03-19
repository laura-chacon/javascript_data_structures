import LRUCache from '../LRUCache';

it('add', () => {
  const lRUCache = new LRUCache(3);
  lRUCache.add('a', 1);
  expect(lRUCache.lookup('a')).toBe(1);
  expect(lRUCache.lookup('b')).toBe(null);
  lRUCache.add('b', 2);
  expect(lRUCache.lookup('b')).toBe(2);
});

it('add more than maxSize elements', () => {
  const lRUCache = new LRUCache(2);
  lRUCache.add('a', 1);
  lRUCache.add('b', 2);
  lRUCache.add('c', 3);
  expect(lRUCache.lookup('a')).toBe(null);
  expect(lRUCache.lookup('b')).toBe(2);
  expect(lRUCache.lookup('c')).toBe(3);
});

it('delete', () => {
  const lRUCache = new LRUCache(2);
  lRUCache.add('a', 1);
  lRUCache.add('b', 2);
  lRUCache.delete('a');
  lRUCache.delete('b');
  expect(lRUCache.lookup('a')).toBe(null);
  expect(lRUCache.lookup('b')).toBe(null);
});

it('add same element twice', () => {
  const lRUCache = new LRUCache(2);
  lRUCache.add('a', 1);
  lRUCache.add('a', 2);
  expect(lRUCache.lookup('a')).toBe(2);
});

it('long flow', () => {
  const lRUCache = new LRUCache(2);
  lRUCache.add('a', 1);
  lRUCache.add('b', 2);
  lRUCache.add('a', 3);
  lRUCache.add('c', 4);
  expect(lRUCache.lookup('a')).toBe(3);
  expect(lRUCache.lookup('c')).toBe(4);
  expect(lRUCache.lookup('b')).toBe(null);
  lRUCache.delete('c');
  lRUCache.add('d', 5);
  lRUCache.add('e', 6);
  expect(lRUCache.lookup('d')).toBe(5);
  expect(lRUCache.lookup('e')).toBe(6);
  expect(lRUCache.lookup('c')).toBe(null);
  expect(lRUCache.lookup('a')).toBe(null);
});
