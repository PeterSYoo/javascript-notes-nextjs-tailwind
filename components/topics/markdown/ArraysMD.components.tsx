import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ArraysMD = () => {
  const c1 = `
  #include <iostream>
  using namespace std;
  
  int main() {
      int myArray[5];  // Declare an array of 5 integers
      myArray[0] = 10; // Assign a value to the first element
      myArray[1] = 20; // Assign a value to the second element
      myArray[2] = 30; // Assign a value to the third element
      myArray[3] = 40; // Assign a value to the fourth element
      myArray[4] = 50; // Assign a value to the fifth element
  
      for (int i = 0; i < 5; i++) {
          cout << myArray[i] << endl;
      }
      return 0;
  }  
  `;
  const c2 = `
  myArray = [10, 20, 30, 40, 50] # Declare and initialize an array

  for i in range(len(myArray)):
      print(myArray[i])  
  `;
  const c3 = `
  let myArray = [10, 20, 30, 40, 50]; // Declare and initialize an array

  for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
  }  
  `;

  return (
    <>
      <p>
        An array is a data structure that stores a collection of elements, all
        of the same data type, in a contiguous block of memory. Elements in an
        array are accessed using an index, which is an integer value that
        represents the position of the element within the array. The first
        element in the array has an index of 0, the second element has an index
        of 1, and so on.
      </p>
      <p>
        In terms of memory, when an array is created, a block of memory is
        allocated for it. The size of the block of memory is determined by the
        number of elements in the array and the size of each element. Each
        element in the array is stored in a contiguous location within the block
        of memory, and the index of the element is used to calculate its memory
        address.
      </p>
      <p>
        For example, if an array named &quot;myArray&quot; of size 5 is created
        to store integers, the memory block reserved for &quot;myArray&quot;
        would be large enough to store 5 integers. Each integer element will be
        stored in a contiguous location within that block, and the element can
        be accessed by its index.
      </p>
      <p>
        Here&apos;s an example of how you might declare and initialize an array
        of integers in C++:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        In this example, we declare an array named &quot;myArray&quot; of size
        5. Then we assign values to each element of the array. Finally, we use a
        for loop to iterate through the array and print out the value of each
        element.
      </p>
      <p>In Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        In this example, we declare and initialize an array named
        &quot;myArray&quot; with values [10, 20, 30, 40, 50]. Then we use a for
        loop to iterate through the array and print out the value of each
        element.
      </p>
      <p>In JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
      <p>
        In this example, we declare and initialize an array named
        &quot;myArray&quot; with values [10, 20, 30, 40, 50]. Then we use a for
        loop to iterate through the array and print out the value of each
        element using console.log.
      </p>
      <p>
        Keep in mind that these are just a few examples, and arrays can be used
        in many other ways depending on the programming language and the
        specific application.
      </p>
    </>
  );
};
