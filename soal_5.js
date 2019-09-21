function buyNoodle(tgl, money) {
    countMie = money / 2500
    if (tgl % 2 != 0) {
        rewards = Math.floor(countMie / 3)
        total = countMie + rewards
    } else {
        rewards = Math.floor(countMie / 4)
        total = countMie + rewards
    }
    if (tgl % 5 == 0) {
        if (rewards % 2 != 0) {
            rewards = rewards * 5
            total = countMie + rewards
        } else {
            rewards = rewards * 10
            total = countMie + rewards
        }
    }
    return total
}

console.log(buyNoodle(25, 50000))