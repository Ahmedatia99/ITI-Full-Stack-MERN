# QuickSort - Overview

This document explains how QuickSort works, the partition logic used in the implementations,
complexity analysis, comparisons to other sorts, and optimization notes.

## How QuickSort works

- QuickSort is a divide-and-conquer algorithm. It selects a pivot element and partitions
  the array into elements less than or equal to the pivot and elements greater than the pivot.
- It recursively sorts the partitions and concatenates the results (in-place variants reorder
  the array directly without extra arrays).

## Partition logic (Lomuto scheme)

- The implementations provided use the Lomuto partition scheme (pivot = last element).
- Walk through the segment with index `j` and maintain `i` as the index of last element known
  to be <= pivot. When an element <= pivot is found, increment `i` and swap `arr[i]` and `arr[j]`.
- After the loop, swap `arr[i+1]` with the pivot at `high`, placing the pivot in its final position.

## Complexity analysis

- Average time: O(n log n)
- Worst-case time: O(n^2) (occurs with poor pivot choices on already-sorted or pathological inputs)
- Space: O(log n) average stack depth, O(n) worst-case recursion depth (but iterative version
  uses an explicit stack which reduces host recursion overhead).

## Comparison with other algorithms

- MergeSort: stable, guaranteed O(n log n), requires O(n) extra space for merge. QuickSort is often
  faster in practice and in-place, but unstable and has a worst-case of O(n^2).
- HeapSort: O(n log n) worst-case and in-place, but generally slower constants compared to optimized QuickSort.
- JavaScript's `Array.prototype.sort()`: built-in sorts typically use highly optimized algorithms (V8 uses
  Timsort for arrays of primitives in some versions). Built-in sorts are recommended for most use-cases
  due to engine-level optimizations.

## Optimizations and suggestions

- Pivot selection: choose median-of-three or random pivot to reduce worst-case probability.
- Tail-call elimination: recurse on the smaller partition first to reduce stack depth (implemented in recursive variant).
- Switch to insertion sort for very small partitions (e.g., size < 16) to improve constant factors.
- Use iterative variant to avoid deep recursion and potential stack overflow for very large arrays.

## Error handling and common bugs

- Validate inputs: ensure the argument is an array. Non-array inputs or mixed types can cause runtime errors.
- Watch out for mutation: functions optionally accept `inPlace` option; by default they return a new sorted array.
- Duplicates are correctly handled by the Lomuto implementation but performance can degrade if many equal elements
  and pivot strategy is poor.
