function fibs(n) {
    let fibSeq = [];
    let n1 = 0, n2 = 1;
    for (let i = 0; i < n; i++) {
        fibSeq.push(n1);
        let n3 = n2 + n1;
        n1 = n2;
        n2 = n3;
    }
    return fibSeq;
}
console.log(fibs(8));

function fibsRec(n) {
    console.log("This was printed recursively");
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prev = fibsRec(n - 1);
    return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}
console.log(fibsRec(8));

