# Low-level systems selection

## Select by stage

| Current stage | Prefer | Avoid |
|---|---|---|
| Understand constraints or model input | Integer width, character encoding, actual input representation | Cache or branch discussion before an algorithm exists |
| Choose an approach | Access pattern, working-set size, contiguous versus pointer-based storage | Micro-optimizing an asymptotically inferior approach |
| Choose a data structure | Storage layout, allocation behavior, amortization, expected versus worst-case hashing | Generic "arrays are cache friendly" with no decision attached |
| Implement or debug | Overflow, stack depth, aliasing, mutation versus copying, library-operation costs | Speculative CPU behavior |
| Audit complexity | Recursion stack, resizing, hashing assumptions, slices and copies, queue operations | Mixing auxiliary and output space |
| Optimize equal-complexity choices | Memory traffic and locality, allocation pressure, then branches or SIMD only when truly applicable | Claiming a constant-factor winner without runtime caveats |
| Explain in an interview | One concrete mechanism and one measured tradeoff | Turning the answer into an unrelated systems lecture |

## Map common contexts

| Problem context | Highest-value concepts |
|---|---|
| Arrays, two pointers, sliding windows | Sequential access and spatial locality; slicing and copying; deque or ring-buffer behavior |
| Matrices and grids | Traversal order versus row layout; nested arrays may not be one contiguous block |
| Strings | Bytes versus code units, code points, and graphemes; immutable concatenation and temporary allocation |
| Hash maps and sets | Load factor, collisions, resizing, expected or amortized lookup; locality versus flat storage |
| Linked lists and LRU caches | Pointer chasing and per-node allocation; constant-time deletion requires an existing node pointer |
| Stacks, queues, monotonic structures | Array-backed amortized growth; circular buffers versus shifting front elements |
| Binary search | Integer-safe midpoint and index width; nonsequential probing only as a secondary observation |
| Sorting and intervals | Stability and in-place tradeoffs; comparator subtraction overflow in fixed-width languages |
| Trees | Recursion depth O(h) versus BFS frontier width O(w); node locality |
| Graph traversal | Adjacency list versus matrix or flat-edge storage; visited representation and frontier memory |
| Heaps and top-k | Binary heap tree-to-array layout; limiting the heap to k shrinks memory and working set |
| Dynamic programming | Dependency order; rolling arrays reduce auxiliary memory and often improve locality |
| Backtracking | Mutate-and-undo versus copying state; stack depth and allocation pressure |
| Tries | Pointer-heavy nodes versus compact indexed layouts; alphabet and encoding assumptions |
| Union-find | Flat parent and rank arrays; path compression and union-by-rank amortization |
| Bit manipulation or bitsets | Fixed width, two's complement, signed shifts; word-level parallelism |
| Prefix sums, Fenwick, segment trees | Accumulator width; flat indexed layouts; iterative versus recursive access |
| Explicit concurrency | Atomics, happens-before, lock scope, and false sharing only when concurrency is part of the problem |

## Refine by active base skill

- `follow-up`: Ask one systems-aware transfer question and stop.
- `check`: Expose hidden costs and distinguish expected, amortized, and worst-case bounds.
- `lcd`: Bias the single diagnostic toward overflow, aliasing, encoding, or mutation, only when plausibly causal.
- `stuck`: Use the concept as a question or hint toward the next decision.
- `salvage`: Prefer correctness mechanisms.
- `optimize`: Prefer locality, memory traffic, allocation, and working-set size.
- `best`: Derive algorithms first, then compare implementation-level tradeoffs.

## Connect without diffusing focus

Keep one or two focal concepts, then add short connections only when they expose a reusable causal chain. Useful examples include:

- per-node allocation → scattered placement → pointer chasing → weaker spatial locality;
- recursion → stack frames → growing stack footprint → overflow risk;
- immutable updates → temporary allocation → copying and memory traffic → garbage-collector pressure;
- hash-table load factor → collisions or probing → longer dependent access chains → locality effects; and
- contiguous layout → predictable strides → cache-line reuse → possible vectorization when the operation also permits it.

Treat these as examples, not a checklist. Keep each connection to one sentence or a compact diagram annotation.

## Stay accurate

- State the assumed language, runtime, or representation when it affects the claim.
- Distinguish asymptotic complexity from constant-factor effects.
- Never claim linked-list insertion is faster without already having the node, hash lookup is unconditionally constant time, recursion is free, or SIMD and branch prediction help merely because a loop exists.
- Remember common differences: Python integers are arbitrary precision and Python lists hold references; Java and C++ arrays store elements more directly and contiguously; string, object, and queue behavior varies by runtime and implementation.

Use this natural interview framing:

> The asymptotic bound is the main decision. Between these equal-complexity variants, I would prefer X because its representation or access pattern causes Y. That constant-factor effect is runtime-dependent, so I would pursue it further only if the constraints or profiling justified it.
