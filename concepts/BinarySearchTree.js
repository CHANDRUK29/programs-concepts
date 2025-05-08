class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this._insertNode(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    }

    search(data) {
        return this._searchNode(this.root, data);
    }

    _searchNode(currentNode, data) {
        if (currentNode === null) return false;
        if (currentNode.data == data) return true;
        if (data < currentNode.data) {
            return this._searchNode(currentNode.left, data)
        } else {
            return this._searchNode(currentNode.right, data)
        }
    }

    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) {
            this.inOrderTraversal(currentNode.left)
            console.log(currentNode.data)
            this.inOrderTraversal(currentNode.right)
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(8)
console.log(bst.search(1))
console.log(bst.search(2))
bst.inOrderTraversal();
// console.log(JSON.stringify(bst));