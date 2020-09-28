function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    var arrReverse = arr.reverse();
    
    console.log(arrReverse.join(" "));
}