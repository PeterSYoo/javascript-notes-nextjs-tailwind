import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const BloomFilterMD = () => {
  const c1 = `
  import mmh3

  class BloomFilter:
      def __init__(self, size, hash_count):
          self.size = size
          self.hash_count = hash_count
          self.bit_array = [0] * size
          
      def add(self, item):
          for i in range(self.hash_count):
              index = mmh3.hash(item, i) % self.size
              self.bit_array[index] = 1
              
      def check(self, item):
          for i in range(self.hash_count):
              index = mmh3.hash(item, i) % self.size
              if self.bit_array[index] == 0:
                  return False
          return True
          
  bloom_filter = BloomFilter(100, 2)
  bloom_filter.add("hello")
  print(bloom_filter.check("hello")) # prints True
  print(bloom_filter.check("world")) # prints False  
  `;
  const c2 = `
  const crypto = require('crypto');

  class BloomFilter {
      constructor(size, hash_count) {
          this.size = size;
          this.hash_count = hash_count;
          this.bit_array = Array(size).fill(0);
      }
  
      add(item) {
          for (let i = 0; i < this.hash_count; i++) {
              const index = this.hash(item, i) % this.size;
              this.bit_array[index] = 1;
          }
      }
  
      check(item) {
          for (let i = 0; i < this.hash_count; i++) {
              const index = this.hash(item, i) % this.size;
              if (this.bit_array[index] === 0) {
                  return false;
              }
          }
          return true;
      }
  
      hash(item, i) {
          return crypto.createHash('md5').update(item + i).digest('hex').slice(0, 8);
      }
  }
  
  const bloomFilter = new BloomFilter(100, 2);
  bloomFilter.add("hello");
  console.log(bloomFilter.check("hello")); // prints true
  console.log(bloomFilter.check("world")); // prints false  
  `;

  return (
    <>
      <p>
        A Bloom filter is a probabilistic data structure that is used to test
        whether an element is a member of a set. It is a space-efficient data
        structure that provides a fast way to check whether an element is
        present in a large set of items. It uses a hash function to map an
        element to a bit array, and then sets the bits corresponding to the hash
        values to 1. To check whether an element is present in the set, the
        Bloom filter applies the same hash function to the element and checks
        whether the bits corresponding to the hash values are set to 1.
      </p>
      <p>
        In terms of memory, a Bloom filter uses a bit array to store the
        elements of the set. The size of the bit array is determined by the
        desired false positive rate and the number of elements in the set. When
        an element is added to the set, the hash function is applied to the
        element to compute its position in the bit array, and the corresponding
        bit is set to 1. When an element is checked for membership in the set,
        the hash function is applied to the element and the corresponding bits
        are checked to see if they are set to 1. If all of the bits are set to
        1, then the element is considered to be a member of the set, but there
        is a small probability of false positives (i.e. an element being
        considered a member of the set even though it is not).
      </p>
      <p>Here is an example of a Bloom filter implemented in Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>And here is an example of a Bloom filter implemented in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        Please note that for this examples I used the python mmh3 library and
        javascript crypto library for generating the hash values, you could use
        any other libraries or hash functions that you prefer.
      </p>
    </>
  );
};
