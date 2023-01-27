import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const HashTableMD = () => {
  const c1 = `
  class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]

    def hash_function(self, key):
        return hash(key) % self.size

    def set(self, key, value):
        index = self.hash_function(key)
        self.table[index].append((key, value))

    def get(self, key):
        index = self.hash_function(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None
  `;
  const c2 = `
  class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    hashFunction(key) {
      return key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.size;
    }
  
    set(key, value) {
      const index = this.hashFunction(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key, value });
    }
  
    get(key) {
      const index = this.hashFunction(key);
      if (!this.table[index]) {
        return null;
      }
      for (const obj of this.table[index]) {
        if (obj.key === key) {
          return obj.value;
        }
      }
      return null;
    }
  }  
  `;

  return (
    <>
      <p>
        A hash table is a data structure that stores key-value pairs and uses a
        hash function to map the key to an index in an array, called a
        &quot;bucket,&quot; where the value can be stored or retrieved. When a
        new key-value pair is added to the hash table, the key is passed through
        the hash function to generate an index, or &quot;hash code,&quot; which
        is used to determine where the value will be stored in the array. When a
        value needs to be retrieved, the key is passed through the hash function
        again to generate the hash code, which is used to locate the value in
        the array.
      </p>
      <p>
        The memory of a hash table can be divided into two main parts: the
        array, also called the &quot;bucket&quot;, where the key-value pairs are
        stored, and the hash function, which is used to map the keys to indices
        in the array. The array is typically implemented as a fixed-size block
        of memory and each element of the array is called a &quot;bucket&quot;
        which can store a single key-value pair. The hash function is typically
        implemented as a mathematical function that takes a key as input and
        returns an index in the array where the corresponding value can be
        stored or retrieved.
      </p>
      <p>
        Hash tables are used in many algorithms and data structures to provide
        fast access to data by using the key as an index. They are commonly used
        in scenarios where there are a large number of elements to be stored and
        accessed, and when the key is a complex data type, such as a string or a
        large number, it&apos;s difficult to use array indexing to access the
        data.
      </p>
      <p>
        Hash table&apos;s performance is determined by two factors the hash
        function and collision resolution. A good hash function should minimize
        the number of collisions, where two keys map to the same index in the
        array. There are different strategies for resolving collisions, such as
        chaining and open addressing. Chaining strategy stores all the elements
        that hash to the same index in a linked list. Open addressing strategy
        finds an empty slot in the array to store the element that would have
        caused a collision.
      </p>
      <p>Here is an example of a simple hash table implementation in Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This implementation uses Python&apos;s built-in hash() function as the
        hash function and uses an array of lists to store the key-value pairs.
        The set() method takes a key and a value as input, and uses the
        hash_function() to determine the index in the array where the value
        should be stored. The get() method takes a key as input and uses the
        hash_function() to determine the index in the array where the
        corresponding value can be found.
      </p>
      <p>
        Here&apos;s an example of a simple hash table implementation in
        JavaScript:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This implementation uses a custom hash function that takes a string as
        input and returns an index in the array. The set() method takes a key
        and a value as input, and uses the hashFunction() to determine the index
        in the array where the value should be stored. The get() method takes a
        key as input and uses the hashFunction() to determine the index in the
        array where the corresponding value can be found.
      </p>
      <p>
        Please note that both of the examples above are just an illustration of
        the basic concepts and they might not be suitable for production use, as
        they lack collision resolution mechanism, so if there are keys that
        generate the same index, the last one will overwrite the previous one.
      </p>
    </>
  );
};
