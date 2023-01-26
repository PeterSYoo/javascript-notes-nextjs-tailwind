import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const QueueMD = () => {
  const c1 = `
  class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if len(self.queue) < 1:
            return None
        return self.queue.pop(0)

    def size(self):
        return len(self.queue)
  `;
  const c2 = `
  class Queue {
    constructor() {
      this.queue = []
    }
  
    enqueue(item) {
      this.queue.push(item)
    }
  
    dequeue() {
      if (this.queue.length === 0) {
        return null
      }
      return this.queue.shift()
    }
  
    size() {
      return this.queue.length
    }
  }  
  `;

  return (
    <>
      <p>
        A queue is a data structure that stores a collection of elements, and
        follows the First-In-First-Out (FIFO) principle, meaning that the first
        element added to the queue will be the first one to be removed.
      </p>
      <p>
        Elements are added to the back of the queue, called the &quot;tail&quot;
        and removed from the front of the queue, called the &quot;head&quot;.
        Queues can be implemented using an array or a linked list.
      </p>
      <p>
        In terms of memory, when an element is added to the queue, memory is
        allocated to store that element. When the element is removed from the
        front of the queue, the memory that was allocated for it is freed. As
        elements are added and removed, the memory usage of the queue may
        change.
      </p>
      <p>
        Additionally, the queue data structure also keeps track of the head and
        tail pointers, which are used to keep track of the position of the front
        and back of the queue in memory. These pointers take up memory as well.
      </p>
      <p>Here is an example of a queue implemented in Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, we define a Queue class that has three methods:
        enqueue, dequeue, and size. The enqueue method is used to add an item to
        the back of the queue, the dequeue method is used to remove an item from
        the front of the queue, and the size method is used to check the number
        of items in the queue.
      </p>
      <p>Here is an example of a queue implemented in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This is similar to the python example, but instead of using append to
        add an item to the end of the list, we are using push. And instead of
        using pop(0) to remove the first element of the list, we are using
        shift() method. Note that both examples are basic implementations of
        queue data structure and there are more advanced and efficient ways to
        implement queue data structure like using circular array, doubly linked
        list, etc.
      </p>
    </>
  );
};
