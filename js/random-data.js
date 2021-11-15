function randomDataList(maxValue, labels) {
    let randomData = [];
    const amount = labels.length;
    for (let i = 0; i < amount; i++) {
        const value = Math.floor((Math.random() * (maxValue + 1)));
        randomData.push(value);
    }
    return randomData;
}