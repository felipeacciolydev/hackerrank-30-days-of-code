function main() {
    const n = parseInt(readLine(), 10);
    if (n % 2 === 0) {
        if (n >= 2 && n <=5) {
            return console.log("Not Weird");
        } else if (n > 5 && n <= 20) {
            return console.log("Weird");
        } else {
            return console.log("Not Weird");
        }
    } else {
        return console.log("Weird");
    }
}
