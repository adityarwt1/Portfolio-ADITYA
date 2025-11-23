"use client";

import DocLayout from "@/components/doc-layout";
import { useState } from "react";


export default function Page() {
  const topics = [
    { id: "binary-search", title: "Binary Search" },
    { id: "two-pointer", title: "Two Pointer Technique" },
    { id: "sliding-window", title: "Sliding Window" },
  ];

  const [active, setActive] = useState("binary-search");

  return (
    <DocLayout topics={topics} activeId={active} onSelect={setActive}>
      {active === "binary-search" && (
        <div>
          <h1>Binary Search</h1>
          <p>Binary search finds an element in O(log n) time.</p>

          <h3>Pseudo Code</h3>
          <pre>
            {`left = 0
right = n - 1

while left <= right:
    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    
    if arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

return -1`}
          </pre>

          <h3>Explanation</h3>
          <p>
            We repeatedly divide the search space into halves. If the mid
            element is smaller than the target, we move to the right half.
            Otherwise, we move to the left half.
          </p>
        </div>
      )}

      {active === "two-pointer" && (
        <div>
          <h1>Two Pointer Technique</h1>
          <p>Used for sorted arrays, string problems, and pair-sum logic.</p>

          <h3>Pseudo Code</h3>
          <pre>
            {`i = 0
j = n - 1

while i < j:
    if arr[i] + arr[j] == target:
        return (i, j)

    if arr[i] + arr[j] < target:
        i += 1
    else:
        j -= 1`}
          </pre>

          <h3>Explanation</h3>
          <p>
            Two pointers help reduce O(n²) loops into O(n). One pointer moves
            forward, the other backward.
          </p>
        </div>
      )}

      {active === "sliding-window" && (
        <div>
          <h1>Sliding Window</h1>
          <p>
            Used for subarray problems like max-sum, longest substring, etc.
          </p>

          <h3>Pseudo Code</h3>
          <pre>
            {`left = 0
sum = 0

for right in 0..n:
    sum += arr[right]

    while sum > k:
        sum -= arr[left]
        left += 1`}
          </pre>

          <h3>Explanation</h3>
          <p>
            Sliding window maintains a dynamic window that expands and shrinks
            based on constraints.
          </p>
        </div>
      )}
    </DocLayout>
  );
}
