let cats = ["reowa", "meowa", "awawa", "ldkia"];

for (let i = 0; i < cats.length; i++){
    let cat1 = cats[i];


    for (let j = i + 1; j < cats.length; j++) {
        let cat2 = cats[j];
        console.log(cat1, cat2);
    }
}
