import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HeapMD = () => {
  const c1 = `
  class MaxHeap:
    def __init__(self):
        self.heap = []

    def push(self, val):
        self.heap.append(val)
        self._bubble_up(len(self.heap) - 1)

    def pop(self):
        if self.heap:
            max_val = self.heap[0]
            self.heap[0] = self.heap.pop()
            self._sift_down(0)
            return max_val

    def _bubble_up(self, index):
        parent = (index - 1) // 2
        if index > 0 and self.heap[index] > self.heap[parent]:
            self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
            self._bubble_up(parent)

    def _sift_down(self, index):
        left = 2 * index + 1
        right = 2 * index + 2
        largest = index
        if left < len(self.heap) and self.heap[left] > self.heap[largest]:
            largest = left
        if right < len(self.heap) and self.heap[right] > self.heap[largest]:
            largest = right
        if largest != index:
            self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
            self._sift_down(largest)
  `;
  const c2 = `
  class MinHeap {
    constructor() {
      this.heap = []
    }
  
    push(val) {
      this.heap.push(val)
      this._bubbleUp(this.heap.length - 1)
    }
  
    pop() {
      if (this.heap.length === 0) return undefined
      const minVal = this.heap[0]
      this.heap[0] = this.heap.pop()
      this._siftDown(0)
      return minVal
    }
  
    _bubbleUp(index) {
      const parent = Math.floor((index - 1) / 2)
      if (index > 0 && this.heap[index] < this.heap[parent]) {
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
        this._bubbleUp(parent)
      }
    }
  
    _siftDown(index) {
      const left = 2 * index + 1
      const right = 2 * index + 2
      let smallest = index
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
        this._siftDown(smallest)
      }
    }
  }  
  `;

  return (
    <>
      <p>
        In computer science, a heap is a specialized tree-based data structure
        that satisfies the heap property: if P is a parent node of C, then the
        key (the value) of P is either greater than or equal to (in a max heap)
        or less than or equal to (in a min heap) the key of C. A heap can be
        implemented as an array, with the children of the element at index i
        being at index 2i+1 and 2i+2.
      </p>
      <p>
        When a heap is implemented in memory, each element is stored in a memory
        location, with the parent-child relationship being determined by the
        indices of the elements in the array. The heap property is maintained by
        continually comparing elements and swapping them if necessary. For
        example, in a max heap, if the key of a child is greater than the key of
        its parent, they are swapped. This process, called
        &quot;heapifying,&quot; can be done in O(log n) time, where n is the
        number of elements in the heap.
      </p>
      <p>
        Additionally, Heap data structure is mainly used in algorithms such as
        Heap sort and Dijkstra&apos;s shortest path algorithm.
      </p>
      <p>Here is an example of a max heap implemented in Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This implementation includes methods to insert (push) and remove (pop)
        elements from the heap, as well as helper methods _bubble_up and
        _sift_down to maintain the heap property.
      </p>
      <p>And here is an example of min heap implemented in javascript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This implementation includes methods to insert (push) and remove (pop)
        elements from the heap, as well as helper methods _bubbleUp and
        _siftDown to maintain the heap property.
      </p>
    </>
  );
};
