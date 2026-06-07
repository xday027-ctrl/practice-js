const sockMerchant = (ar) => {
    const map = new Map();

    for (const sock of ar) {
        map.set(sock, (map.get(sock) || 0) + 1);
    }

    let pairs = 0;

    for (const count of map.values()) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
};


console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); 
