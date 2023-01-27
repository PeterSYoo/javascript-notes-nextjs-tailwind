import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const TrieMD = () => {
  const c1 = `
  class TrieNode:
    def __init__(self):
        self.children = {}
        self.end_of_word = False

  class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        current.end_of_word = True

    def search(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                return False
            current = current.children[char]
        return current.end_of_word
  `;
  const c2 = `
  class TrieNode {
    constructor() {
      this.children = {};
      this.end_of_word = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (let char of word) {
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.end_of_word = true;
    }
  
    search(word) {
      let current = this.root;
      for (let char of word) {
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
      return current.end_of_word;
    }
  }  
  `;

  return (
    <>
      <p>
        A trie, also known as a prefix tree, is a tree-like data structure that
        is used to store a collection of strings. Each node in the trie
        represents a single character in a string, and the path from the root to
        a particular node represents a prefix of a string in the collection. The
        key property of a trie is that no node in the tree stores the complete
        string, only its prefix. In this way, a trie can be used to quickly
        search for a string in a large collection by traversing the tree from
        the root to a leaf node.
      </p>
      <p>
        In terms of memory usage, a trie typically uses less memory than a hash
        table or a binary search tree, because it does not store the complete
        string at each node. Instead, each node only stores a single character,
        along with links to its children. The memory usage of a trie will depend
        on the size of the character set and the length of the strings being
        stored, as well as the number of strings in the trie.
      </p>
      <p>
        A trie can be implemented using an array or a linked list, where each
        node in the trie is a structure that contains a character and an array
        or linked list of child nodes. The root node of the trie is typically a
        special node that contains no character, and it serves as the starting
        point for all searches.
      </p>
      <p>Here&apos;s an example of a basic trie implementation in Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        And here&apos;s an example of a basic trie implementation in JavaScript:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        Both examples demonstrate the basic functionality of a trie. The
        insert() method is used to add a string to the trie, and the search()
        method is used to check if a string is in the trie. Please keep in mind
        that these are basic examples and there are much more functionality that
        can be added to a Trie, like deletion, finding all words with a certain
        prefix, etc.
      </p>
    </>
  );
};
