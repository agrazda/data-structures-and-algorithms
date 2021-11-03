const { Queue, Stack } = require('./stacksQueues.js')

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const q = new Queue();
  expect(() => {
    q.enqueue(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new Queue();
  expect(() => {
    q.enqueue(1);
    q.dequeue();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
  expect(q.dequeue()).toEqual(3);
  expect(() => {q.dequeue();}).toThrow();
});

/////////////////////////////////////////////////////////

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('stack can add and remove items', () => {
  const s = new Stack();
  s.push(1);
  expect(s.pop()).toEqual(1);
  s.push(2);
  expect(s.pop()).toEqual(2);
});

test('stack can follow first in, last out', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});

test('peek returns the first element but doesnt pop it', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.peek()).toEqual(3);
  expect(s.pop()).toEqual(3);
  expect(s.peek()).toEqual(2);
  expect(s.pop()).toEqual(2);
  expect(s.peek()).toEqual(1);
  expect(s.pop()).toEqual(1);
});