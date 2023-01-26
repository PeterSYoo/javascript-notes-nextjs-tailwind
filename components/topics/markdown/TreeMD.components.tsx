import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const TreeMD = () => {
  const c1 = `
  class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

  class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        new_node = Node(data)
        if self.root is None:
            self.root = new_node
        else:
            current = self.root
            while True:
                if data < current.data:
                    if current.left is None:
                        current.left = new_node
                        break
                    else:
                        current = current.left
                else:
                    if current.right is None:
                        current.right = new_node
                        break
                    else:
                        current = current.right
  `;
  const c2 = `
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      let newNode = new Node(data);
      if (!this.root) {
        this.root = newNode;
      } else {
        let current = this.root;
        while (true) {
          if (data < current.data) {
            if (!current.left) {
              current.left = newNode;
              break;
            } else {
              current = current.left;
            }
          } else {
            if (!current.right) {
              current.right = newNode;
              break;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }  
  `;

  return (
    <>
      <p>
        Trees are a type of data structure that is used to store and organize
        data in a hierarchical manner. Each node in a tree represents an element
        of the data, and it can have one or more child nodes, which are
        connected to it via edges. The topmost node in a tree is called the
        root, and nodes that do not have any children are called leaf nodes.
      </p>
      <p>
        In terms of memory, each node in a tree is typically stored in a block
        of memory, with its children being stored in subsequent blocks. When a
        tree is traversed (i.e. when its elements are accessed), the memory
        addresses of the nodes are followed in a specific order, based on the
        tree&apos;s structure. For example, in a depth-first search, the
        algorithm would visit all the children of a node before moving on to the
        next one.
      </p>
      <p>
        In terms of algorithms, trees are used in a variety of ways, including
        for searching and sorting data, for organizing and manipulating
        hierarchical data, and for implementing other data structures such as
        graphs and heaps.
      </p>
      <p>
        Here is an example of a simple binary tree implementation in Python:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This is an example of how to create a binary tree and insert new data
        into it. Each node in the tree contains an attribute data which stores
        the data of the node, and two pointers left and right which point to the
        left and right child of the node respectively. The insert() method is
        used to insert new data into the tree. It first checks if the tree is
        empty, and if so, it creates the root node. If the tree is not empty, it
        starts at the root and compares the new data with the data of the
        current node. If the new data is less than the current data, it moves to
        the left child. If the new data is greater than the current data, it
        moves to the right child. This process continues until it finds an empty
        spot in the tree where the new node can be inserted.
      </p>
      <p>
        Here is an example of a simple binary tree implementation in JavaScript:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        As you can see the implementation is very similar, although it uses the
        syntax of javascript. Please note that this is just an example of how to
        create a binary tree and insert new data into it, but it is not a full
        implementation of a binary search tree.
      </p>
    </>
  );
};
