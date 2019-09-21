function fibonacci(col, row) {
    const fibo = []
    i = 0
    j = 1
    for (r = 0; r < row; r++) {
        fibo[r] = []
        for (c = 0; c < col; c++) {
            if (r == 0 && c == 0) {
                fibo[r][c] = 0
            } else {
                fibo[r][c] = j
                output = j + i
                i = j
                j = output
            }
        }
    }
    return fibo
}

console.log(fibonacci(4, 3))