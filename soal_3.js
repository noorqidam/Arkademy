function count_handshake(people) {
    let count = 0
    for (i = 1; i < people; i++) {
        count += i;
    }
    return 'result: ' + count;
}
console.log(count_handshake(3))
console.log(count_handshake(6))