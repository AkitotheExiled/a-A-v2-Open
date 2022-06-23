function fizzBuzz(max) {
    for(let i =0; i < max; i ++) {
        let divFive = i % 5 == 0;
        let divThree = i % 3 == 0;
        if ((divThree || divFive) && !(divThree && divFive)) {
            console.log(i);
        }
    }
}
// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18
