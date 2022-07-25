// main.js
var worker = new Worker('data.js');

// 监听事件
/* worker.addEventListener('message', function (e) {
  console.log('MAIN: ', 'RECEIVE', e.data);
}); */
//或者可以使用 onMessage 来监听事件：
worker.onmessage = function (e) {
  console.log('MAIN: ', 'RECEIVE', e.data);
};
// 触发事件，传递信息给 Worker
worker.postMessage('Hello Worker, I am main.js');


