import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const AlgorithmsMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Algorithms in data structures and algorithms are sets of instructions
        for manipulating and analyzing data structures, such as sorting,
        searching, traversing, and balancing, to solve specific problems and
        improve the performance of a program.
      </p>
      <p>
        Data structures and algorithms are closely related, as the algorithms
        are used to manipulate and analyze the data structures. Here are some
        commonly used algorithms in data structures and algorithms:
      </p>
      <ol className="list-decimal ml-5">
        <li>
          Sorting algorithms:
          <ul className="list-disc ml-5">
            <li>
              Bubble sort, which repeatedly swaps adjacent elements that are in
              the wrong order.
            </li>
            <li>
              Quicksort, which is a divide-and-conquer algorithm that selects a
              &quot;pivot&quot; element and partitions the array into elements
              less than and greater than the pivot, and recursively sort each
              partition.
            </li>
            <li>
              Merge sort, which is a divide-and-conquer algorithm that divides
              the array into two halves, recursively sorts each half, and then
              merges the two sorted halves.
            </li>
            <li>
              Heap sort, which is an comparison based sorting algorithm that
              builds a heap from the input elements and repeatedly extracts the
              maximum element from the heap.
            </li>
          </ul>
        </li>
        <li>
          Search algorithms:
          <ul className="list-disc ml-5">
            <li>
              Linear search, which checks each element of the array sequentially
              until it finds a match.
            </li>
            <li>
              Binary search, which is an efficient search algorithm that works
              on a sorted array and repeatedly divides the search interval in
              half.
            </li>
          </ul>
        </li>
        <li>Graph algorithms:</li>
        <ul className="list-disc ml-5">
          <li>
            Depth-first search, which visits all the vertices of a graph by
            exploring as far as possible along each branch before backtracking.
          </li>
          <li>
            Breadth-first search, which visits all the vertices of a graph by
            exploring all the neighbors of a vertex before moving on to the next
            vertex.
          </li>
          <li>
            Dijkstra&apos;s algorithm, which is used to find the shortest path
            between two nodes in a graph.
          </li>
          <li>
            A* algorithm, which is an extension of Dijkstra&apos;s algorithm
            that uses heuristics to try to find the best path more quickly.
          </li>
        </ul>
        <li>
          Tree algorithms:
          <ul className="list-disc ml-5">
            <li>
              In-order traversal, which visits the left subtree, the root, and
              then the right subtree of a binary tree.
            </li>
            <li>
              Pre-order traversal, which visits the root, the left subtree, and
              then the right subtree of a binary tree.
            </li>
            <li>
              Post-order traversal, which visits the left subtree, the right
              subtree, and then the root of a binary tree.
            </li>
            <li>
              AVL tree, which is a self-balancing binary search tree where the
              heights of the left and right subtrees of the root differ by at
              most one.
            </li>
            <li>
              Red-black tree, which is a self-balancing binary search tree where
              the nodes are colored red or black to ensure that the tree remains
              balanced.
            </li>
          </ul>
        </li>
        <li>
          Hashing algorithms:
          <ul className="list-disc ml-5">
            <li>
              Linear probing, which is an open addressing method in which we
              linearly probe for next empty slot.
            </li>
            <li>
              Chaining, which is a method where each slot of the hash table
              contains a linked list of elements that have the same hash value.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        This is not an exhaustive list, there are many more algorithms which are
        used in data structures and algorithms, but these are some of the most
        commonly used and well-known ones.
      </p>
    </>
  );
};
