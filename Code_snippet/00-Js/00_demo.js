let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]

function nest(arr) {
    const result = [];
    const itemMap = {};
    for (let item of arr) {
        itemMap[item.id] = { ...item, children: [] }
    }
    for(let item of arr){
        const id = item.id;
        const pid = item.id;
        const tree = itemMap[id];
        result.push(tree);
        if(!itemMap[pid]){
            ite
        }

    }
}

console.log();