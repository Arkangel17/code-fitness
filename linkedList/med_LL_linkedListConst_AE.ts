import { notDeepEqual } from 'assert';
import * as utils from '../utils'
import { LinkedList } from './a_linkedListSandbox';
import { Node } from './a_linkedListClasses'

  
  // Feel free to add new properties and methods to the class.
  export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;
  
    constructor(arr: number[]) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      Array.from(arr, (item: number) => this.setHead(new Node(item)))
    }
  
    // o(1) time + space
    setHead(node: Node) {

        if(this.head === null){
        this.head = node;
        this.tail = node;
        ++this.length;
        return;
        }
        this.insertBefore(this.head, node)
    }
  
    /**
     * @name setTail
     * @description
     * @param node 
     * @returns void 
     * @summary 
     * o(1) time + space
     * 1. check if list is empty
     * 2. increment linked list length
     */
    setTail(node: Node) {  

        if(this.tail === null){ // 1
            this.setHead(node)
            ++this.length;
            return;
        }
        this.insertAfter(this.tail, node)
    }

    // o(n) time | o(1) space
    find(node: Node): Node | undefined {

        if(this.length === 0) return;

        let nodeElem: Node | null = this.head

        while(nodeElem !== null){
            let item: Node = nodeElem.next;
            if(item.value === node.value) return node
        }
        return node
    }
  
    // o(1) time & space
    insertBefore(node: Node = null, nodeToInsert: Node) {

        if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;
        if(node.prev === null){
            this.head = nodeToInsert;
        }else{
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;        
    }
  
    // o(1) time & space
    insertAfter(node: Node = null, nodeToInsert: Node) {

        if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert)
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;
        if(node.next === null){
            this.tail = nodeToInsert;
        }else{
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert
    }
  
    // o(p) time & o(1) space
    insertAtPosition(position: number, nodeToInsert: Node): void {

        if(position === 0){
            this.setHead(nodeToInsert);
            return;
        } 
        if(position === this.length) {
            this.setTail(nodeToInsert);
            return; 
        } 
        let node: Node | null = this.head;
        let currentPosition: number = 0;
        while(node !== null && currentPosition !== position) node = node.next
        if(node !== null){
            this.insertBefore(node, nodeToInsert)
        }else{
            this.setTail(nodeToInsert)
        }
        ++this.length;
    }
  
  
    /**
     * @name removeNodesWithValue
     * @description
     * @example
     * @param value 
     * @returns
     * @summary
     * o(n) space | o(1) space 
     * 1. store node to compare with value for removal  
     * 2. continue to traverse through linked list
     * 3. if node.value === value, remove node
     */
    removeNodesWithValue(value: number) {
        if(this.length === 0) return;
        let node: Node | null = this.head;
        while(node !== null){
            let removedNode: Node = node; // 1
            node = node.next; // 2
            if(removedNode.value === value) this.remove(removedNode) // 3
            console.log(`node with value: ${removedNode.value} has been removed`)
            --this.length;
        } 
    }
  
    remove(node: Node) {
        if(node === this.head) this.head = this.head.next;
        if(node === this.tail) this.tail = this.tail.prev;
        this.removeNodeConnections(node);
        --this.length;
    }

    // o(1) time | o(1) space
    removeNodeConnections(node: Node): void { 
        if(node.prev !== null) node.prev.next = node.next;
        if(node.next !== null) node.next.prev = node.prev;
        node.prev = null;
        node.next = null; 
    }

    // o(n) time | o(1) space 
    traverse(node: Node | null = this.head): void {
        node && console.log(`value: ${node.value}`)
        node && this.traverse(node.next)
    }

    // 
    /**
     * @description
     * @param value 
     * @returns 
     * @summary
     * o(n) time | o(1) space
     * 1. start at first node / head
     * 2. traverse list until node w/ value is found
     */
    containsNodeWithValue(value: number): boolean {
        let node: Node | null = this.head; // 1
        while(node !== null && node.value !== value) node = node.next;
        return node !== null;
    }

  }

//   let linkedListConst: any = [
//     {"id": "1", "next": null, "prev": null, "value": 1},
//     {"id": "2", "next": null, "prev": null, "value": 2},
//     {"id": "3", "next": null, "prev": null, "value": 3},
//     {"id": "3-2", "next": null, "prev": null, "value": 3},
//     {"id": "3-3", "next": null, "prev": null, "value": 3},
//     {"id": "4", "next": null, "prev": null, "value": 4},
//     {"id": "5", "next": null, "prev": null, "value": 5},
//     {"id": "6", "next": null, "prev": null, "value": 6}
//   ]

let linkedListArr: number[] = [5, 4, 3, 2, 1, 4];

let linkedList = new DoublyLinkedList(linkedListArr)
linkedList.traverse()