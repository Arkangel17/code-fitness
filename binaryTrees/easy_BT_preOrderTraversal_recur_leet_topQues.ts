import * as Typings from '../typing'
import * as utils from '../utils'


/**
 * given the root of a binary tree, return inorder traversal 
 * of it's node values
 * 
 * 
 */

class inOrderTravNode {
    val: number
    left: inOrderTravNode | null
    right: inOrderTravNode | null
    constructor(val?: number, left?: inOrderTravNode | null, right?: inOrderTravNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


/**
 * @description creates BT from number[]
 * @param node starts as root, then subsequent tree nodes
 * @returns tree
 * @summary ???
 */
function createBinaryTreeFromNumArr(values: number[], i: number = 0){
    if(i < values.length){
        let node: inOrderTravNode = new inOrderTravNode(values[i])
        node.left = createBinaryTreeFromNumArr(values, 2 * i + 1); // 1 3 5 7 ...
        node.right = createBinaryTreeFromNumArr(values, 2 * i + 2); // 2 4 6 8 ...
        return node
    }
}

function preorderTraversal(root: inOrderTravNode | null, arr: number[] = []): number[] {
    
    if(!root) return [];

    arr.push(root.val);
    root.left && preorderTraversal(root.left, arr)    
    root.right && preorderTraversal(root.right, arr)
    console.log(arr)
    return arr

};

let inOrder: Typings.strNumArrObj = {
    'test1': [1, null, 2, 3],
    'test2': []
}

let binaryTree = createBinaryTreeFromNumArr(inOrder['test1'] as number[])
utils.timed('res', preorderTraversal, [binaryTree])