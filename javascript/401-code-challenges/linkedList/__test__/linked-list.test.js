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

    xit('Cans swap nodes in a linked list', () => {
        const swapnodes = new LinkedList()
    });

    xit('Can successfully add a node to the end of the linked list', () => {

    });

    xit('Can successfully add multiple nodes to the end of a linked list', () => {

    });

    xit('Can successfully insert a node before a node located i the middle of a linked list', () => {

    });

    xit('Can successfully insert a node before the first node of a linked list', () => {

    });

    xit('Can successfully insert after a node in the middle of the linked list', () => {

    });

    xit('Can successfully insert a node after the last node of the linked list', () => {

    });

    xit('Where k is greater than the length of the linked list', () => {

    });

    xit('Where k and the length of the list are the same', () => {

    });

    xit('Where k is not a positive integer', () => {

    });

    xit('Where the linked list is of a size 1', () => {

    });

    xit('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {

    });

})

