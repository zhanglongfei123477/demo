
// 发布订阅模式
class Publisher {
    constructor() {
        this.map = new Map();
    }
    on(key, callback) {
        let arr = this.map.get(key) || [];
        arr.push(callback);
        this.map.set(key, arr);
    }
    emit(key, data = {}) {
        if (this.map.has(key)) {
            this.map.get(key).map((item) => {
                item(data);
            });
        }
    }
    off(key, callback) {
        let arr = this.map.get(key) || []
        let index = arr.indexOf(callback)
        if (arr && index) {
            arr.splice(index, 1);
        }
    }
}

