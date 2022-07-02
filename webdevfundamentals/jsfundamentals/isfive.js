function isFive(num) {
    if (num == 5) return true
    return false

}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false


// This is just a sample script. Paste your real code (javascript or HTML) here.
javascript: (function() {
    const hourModifier = 1;
    const hoursPerDay = 4;
    const total = (453.75 * hourModifier).toFixed(2);
    const remaining = (hourModifier * [...document.querySelectorAll("span")].filter(a => a.textContent.includes("minute") || a.textContent.includes("hour")).map(record => {
        const text = record.textContent;
        let hours = text.match(/(\d+) hour/, "$1");
        let minutes = text.match(/(\d+) minute/, "$1");
        hours = (hours && hours.length) ? +hours[1] : 0;
        minutes = (minutes && minutes.length) ? +minutes[1] : 0;
        return hours * 60 + minutes;
    }).reduce((sum, next) => sum + next, 0) / 60).toFixed(2);
    const percentComplete = (100 - 100 * (remaining / total)).toFixed(2);
    const percentRemaining = (100 - percentComplete).toFixed(2);
  	let text = `
				full total: ${total} hours \nremaining: ${remaining} hours  \n
				completed: ${(total - remaining).toFixed(2)} hours -----------
                ---------\n You are ${percentComplete}% complete \n
                You have ${percentRemaining}% left to go \n
                At an average of ${hoursPerDay} hours per day, you have ${(remaining/hoursPerDay).toFixed(2)} days left
				`;
  	alert(text);
    console.log(`full total: ${total} hours \nremaining: ${remaining} hours  \n`);
    console.log(`completed: ${(total - remaining).toFixed(2)} hours`);
    console.log(`--------------------\n`);
    console.log(`You are ${percentComplete}% complete`);
    console.log(`You have ${percentRemaining}% left to go`);
    console.log(`At an average of ${hoursPerDay} hours per day, you have ${(remaining/hoursPerDay).toFixed(2)} days left`);
})();
