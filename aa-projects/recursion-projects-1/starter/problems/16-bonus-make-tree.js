/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

const makeTree = (categories, parent) => {
  // your code here

  // Create an object to return if no further children, or an object to push to if we have further children
  let result = {};

  // Grab the first person we see, is this person a child of our parent?  Yes?
  let firstEle = categories[0];

  if (categories.length === 0) {

    return result;
  }
  for (let element of categories) {

  }
  if (firstEle === undefined) {
    return result;
  }
  // Is this person's parent the parent we are looking for?
  if (firstEle.parent === parent) {
    // Yes => Then, continue down the tree to find further children
    result[firstEle.id] = makeTree(categories.slice(1), firstEle.id);

  } else if ((firstEle.parent !== parent)) {
    // No - Keep going down the tree until we find one for our parent
    let otherChildren = {};
    //let foundChildren = makeTree(categories.slice(1), parent);
    for (let child of categories) {
      console.log(makeTree(child, parent));
    }
    //let joinedChildren = {...foundChildren, ...otherChildren};





  }

  result[firstEle.id] = makeTree(categories.slice(1), firstEle.id);
  return result;
};

const categories0 = [
  { id: 'animals', 'parent': null }
];


const categories1 = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: "cats", "parent": "mammals"},
  { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

const tree1 = makeTree(categories1, null);
console.log(JSON.stringify(tree1, undefined, 2));




/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
