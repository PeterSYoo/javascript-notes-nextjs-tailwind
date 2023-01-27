import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const BubbleSortMD = () => {
  const c1 = `
  def bubble_sort(arr):
    n = len(arr)
    # Traverse through all elements in array
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n-i-1):
            # traverse the array from 0 to n-i-1
            # swap if the element found is greater
            # than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
  `;
  const c2 = `
  function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n-1; i++) {
        // Last i elements are already in place
        for (var j = 0; j < n-i-1; j++) {
            // traverse the array from 0 to n-i-1
            // swap if the element found is greater
            // than the next element
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
  }
  `;

  return (
    <>
      <p>
        Bubble sort is a simple sorting algorithm that repeatedly steps through
        the list to be sorted, compares each pair of adjacent items and swaps
        them if they are in the wrong order. The pass through the list is
        repeated until no swaps are needed, which indicates that the list is
        sorted. The algorithm, which is a comparison sort, is named for the way
        smaller or larger elements &quot;bubble&quot; to the top of the list as
        the sort progresses.
      </p>
      <p>
        In terms of what is happening in memory, the algorithm repeatedly
        iterates through the list, comparing elements and swapping them if they
        are out of order. Each swap requires a temporary variable to hold one of
        the values, so the algorithm requires a small amount of additional
        memory to store this temporary variable. Additionally, the algorithm may
        require additional memory to store the current index or indexes being
        compared during the iteration.
      </p>
      <p>
        Here is an example of a bubble sort algorithm implemented in Python:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        And here is an example of a bubble sort algorithm implemented in
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
        Both examples have the same logic and the same time and space
        complexity, the syntax of the two languages is the only difference.
      </p>
    </>
  );
};
