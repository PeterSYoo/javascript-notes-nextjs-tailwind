import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const LinkedListsMD = () => {
  const c1 = `
  class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

  class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete_with_value(self, data):
        if self.head is None:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next
    
    def find(self, data):
        current = self.head
        while current:
            if current.data == data:
                return current
            current = current.next
        return None
  `;
  const c2 = `
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    prepend(data) {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    deleteWithValue(data) {
      if (!this.head) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  
    find(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }  
  `;

  return (
    <>
      <p>
        A linked list is a data structure that consists of a sequence of
        elements, called nodes, each of which contains a reference to the next
        element in the sequence. The first element, called the head, does not
        have a reference to a previous element, while the last element, called
        the tail, does not have a reference to a next element.
      </p>
      <p>
        In terms of memory, each node of a linked list typically contains two
        fields: one for the data stored in the node, and one for the reference
        to the next node. When a linked list is created, the memory is allocated
        for the first node (the head) and subsequent nodes are added by
        allocating memory for them and updating the next reference of the
        previous node to point to the new node. When a node is removed, the
        reference to that node is removed and the memory is deallocated.
      </p>
      <p>
        Linked lists are useful in situations where you need to frequently
        insert or remove elements, since these operations can be performed in
        constant time by updating the references. However, accessing an element
        by index takes O(n) time, since you need to traverse the list from the
        head to the desired node.
      </p>
      <p>
        Here is an example of a simple linked list implementation in Python:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This implementation has a Node class, which has a data field and a next
        field, and a LinkedList class that contains a reference to the head of
        the list. The LinkedList class has methods for appending, prepending,
        deleting with a given value, and finding a node with a given value.
      </p>
      <p>
        The append method is adding element in the last of the list by
        traversing the current next reference until it reaches the last node and
        then it connects the new node to the last node&apos;s next reference.
      </p>
      <p>
        The prepend method is adding element in the start of the list by
        connecting the new node next reference to the current head and then the
        head reference is updated to the new node.
      </p>
      <p>
        delete_with_value method is searching the element in the list and
        removing it by updating the next reference of previous node to the next
        node.
      </p>
      <p>
        find method is traversing the list and returning the node containing the
        searched value.
      </p>
      <p>
        These are just basic implementation examples of linked list and it can
        be further optimized and modified according to the requirements.
      </p>
      <p>
        Here is an example of a simple linked list implementation in JavaScript:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This implementation has a Node class, which has a data property and a
        next property, and a LinkedList class that contains a reference to the
        head of the list. The LinkedList class has methods for appending,
        prepending, deleting with a given value, and finding a node with a given
        value.
      </p>
      <p>
        The append method is adding an element at the end of the list by
        traversing the current next reference until it reaches the last node and
        then it connects the new node to the last node&apos;s next reference.
      </p>
      <p>
        The prepend method is adding an element at the start of the list by
        connecting the new node&apos;s next reference to the current head and
        then updating the head reference to the new node.
      </p>
      <p>
        deleteWithValue method is searching the element in the list and removing
        it by updating the next reference of the previous node to the next node.
      </p>
      <p>
        find method is traversing the list and returning the node containing the
        searched value.
      </p>
      <p>
        These are just basic implementation examples of linked list and it can
        be further optimized and modified according to the requirements.
      </p>
    </>
  );
};
