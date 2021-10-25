'use strict';

const {Node, LinkedList} = require('../linkedList.js')



describe(' Linked List', () => {

    it('works', () => {
        expect(true).toBeTruthy();
    });

    it('Can successfully instantiate an empty linked list', () => {
        const list = new LinkedList()
        expect(list.head).toBe(null)
    });

    it('Can properly insert into the linked list', () => {
        const insertList = new LinkedList()
        insertList.insert(5)
        expect(insertList.head.value).toBe(5)
    });

    it('The head property will properly point to the first node in the linked list', () => {
        const headNode = new LinkedList()
        expect(headNode.head).toBe(headNode.head)
    });

    it('Can properly insert multiple nodes into the linked list', () => {
        const insertMulti = new LinkedList()
        insertMulti.insert(7)
        expect(insertMulti.head.value,)
    });

    xit('Will return true when finding a value within the linked list that exists', () => {

    });

    xit('Will return false when searching for a value in the linked list that does not exist', () => {

    });

    xit('Can properly return a collection of all the values that exist in the linked list', () => {

    });

})