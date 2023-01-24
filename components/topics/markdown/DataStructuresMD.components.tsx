import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const DataStructuresMD = () => {
  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Data structures are used to organize and store data in a specific format
        that allows for efficient manipulation and retrieval.
      </p>

      <p>
        Data structures are used to organize and store data in a specific format
        that allows for efficient manipulation and retrieval. Some common data
        structures include:
      </p>
      <ul className="list-disc ml-5">
        <li>
          Arrays: A collection of elements, each identified by an index or a
          key.
        </li>
        <li>
          Linked Lists: A linear collection of data elements, called nodes, each
          pointing to the next node by means of a pointer.
        </li>
        <li>Stack: A last in, first out (LIFO) data structure.</li>
        <li>Queue: A first in, first out (FIFO) data structure.</li>
        <li>
          Tree: A hierarchical data structure composed of nodes, where each node
          can have one parent node and multiple child nodes.
        </li>
        <li>
          Graph: A non-linear data structure that consists of a finite set of
          vertices (or nodes) and set of Edges connecting these vertices.
        </li>
        <li>
          Hash Table: A data structure that uses a hash function to map keys to
          their corresponding values.
        </li>
        <li>
          Heap: A data structure that satisfies the heap property: if P is a
          parent node of C, then the key of P is either greater than or equal to
          (in a max heap) or less than or equal to (in a min heap) the key of C.
        </li>
        <li>
          Trie: a tree-like data structure, which is used for efficient
          retrieval of a key in a large data-set of strings.
        </li>
        <li>
          Bloom Filter: a probabilistic data structure, which is used to test
          whether an element is a member of a set or not.
        </li>
      </ul>
      <p>
        These are some of the most common data structures, but there are many
        other specialized data structures that can be used for specific purposes
        such as B-Trees, AVL Trees, etc.
      </p>
    </>
  );
};
