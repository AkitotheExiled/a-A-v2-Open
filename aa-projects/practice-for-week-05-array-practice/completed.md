# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: We're returning a property length, and no matter the size of the array we're always pushing an element to the end no matter what size.

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Popping out the last element.  Size does not matter here.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Popping out the first element.  Size does not matter here.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(?)
Space complexity: O(?)
Justification: Just like push, except we're inserting at the front

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(1)
Space complexity: O(1)
Justification: We're mutating the original array in place

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Creates a new array while inserting the new elements in

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Iterating an array of length n

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Iterating an array of length n, the creation is holding a variable and pushing is O(1)

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: O(n) since it iterates over n number of elements.  Space complexity should be the same since we're dealing with an array

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Time 0(n) since we're iterating over the array.  O(1) for space since we're holding onto one variable

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: I think O(n) since its not constant over large arrays and over gets bigger as n gets larger as well..  Space complexity should be less since they transpose and mutate the original array in place

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(1)
Justification: I believe it uses its index to do this... So it should be O(1)

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
