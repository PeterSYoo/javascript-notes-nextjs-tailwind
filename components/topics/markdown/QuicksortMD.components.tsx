import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const QuicksortMD = () => {
  const c1 = `
  def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) - 1]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

  print(quicksort([3,6,8,10,1,2,1]))
  `;
  const c2 = `
  function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var left = [];
    var middle = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] === pivot) {
            middle.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(middle).concat(quicksort(right));
  }
  console.log(quicksort([3,6,8,10,1,2,1]));
  `;

  return (
    <>
      <p>
        Quicksort is an efficient sorting algorithm that uses a
        divide-and-conquer strategy to sort an array or a list of elements. The
        basic idea behind the algorithm is to partition the array into two
        smaller subarrays, one containing elements that are less than a chosen
        pivot element and the other containing elements that are greater than or
        equal to the pivot. The pivot element is typically chosen as the last
        element in the array, but it can also be chosen randomly or from the
        middle of the array.
      </p>
      <p>
        Once the partition is made, the quicksort algorithm recursively sorts
        the left and right subarrays. This process is repeated until the entire
        array is sorted. The key advantage of quicksort is its ability to sort
        large arrays and lists quickly and efficiently.
      </p>
      <p>
        In terms of memory usage, quicksort uses a divide-and-conquer approach,
        which means that it creates smaller subarrays and recursively sorts
        them. As a result, the algorithm has a space complexity of O(log n) in
        the average and best case, and O(n) in the worst case. This means that
        the algorithm requires a relatively small amount of memory to sort large
        arrays and lists.
      </p>
      <p>Here&apos;s an example of quicksort written in Python:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        This quicksort implementation uses the last element of the array as the
        pivot and creates three subarrays: left, middle and right. The left
        subarray contains elements that are less than the pivot, the middle
        subarray contains elements that are equal to the pivot and the right
        subarray contains elements that are greater than the pivot. The function
        then recursively calls itself on the left and right subarrays until the
        entire array is sorted.
      </p>
      <p>Here&apos;s an example of quicksort written in JavaScript:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        This quicksort implementation is similar to the Python example, it uses
        the last element of the array as the pivot and creates three subarrays:
        left, middle and right. The left subarray contains elements that are
        less than the pivot, the middle subarray contains elements that are
        equal to the pivot and the right subarray contains elements that are
        greater than the pivot. The function then recursively calls itself on
        the left and right subarrays until the entire array is sorted.
      </p>
      <p>
        It&apos;s worth noting that the quicksort algorithm can have different
        variations on how to choose the pivot and partition the array, this
        examples are just one way of implementation.
      </p>
    </>
  );
};
