import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const StackMD = () => {
  const c1 = `
  class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)
  `;
  const c2 = `
  class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop()
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1]
        }
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
  }
  `;

  return (
    <>
      <p>
        A stack is a data structure that follows the Last In, First Out (LIFO)
        principle. This means that the last element added to the stack will be
        the first one to be removed. It has two main operations: push and pop.
        Push adds an element to the top of the stack, and pop removes the
        element from the top of the stack. The top of the stack is the element
        that was most recently added.
      </p>
      <p>
        In terms of memory, a stack is typically implemented as an array or a
        linked list. Each element in the stack is stored in a memory location,
        and the stack pointer, a pointer or index that keeps track of the top of
        the stack, is updated each time an element is pushed or popped. When an
        element is pushed onto the stack, the stack pointer is incremented to
        point to the next available memory location, and the new element is
        stored there. When an element is popped from the stack, the element at
        the current stack pointer location is removed and the pointer is
        decremented to the previous location.
      </p>
      <p>Here&apos;s an example of a stack implemented in Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>Here&apos;s an example of a stack implemented in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In both examples, The stack is implemented as a class with basic
        operations like push, pop, peek, is_empty and size. The push method
        appends an item to the stack, the pop method removes the last item
        added, peek returns the last item added without removing it, is_empty
        returns true if the stack is empty and size returns the number of items
        in the stack.
      </p>
    </>
  );
};
