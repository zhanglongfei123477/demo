function sleep(interval) {
    return new Promise(resolve => {
        setTimeout(resolve, interval);
    })
}

// 用法
async function one2FiveInAsync() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        await sleep(3000);
    }
    /* console.log("111");
    await sleep(3000);
    console.log("222"); */
}

one2FiveInAsync();


