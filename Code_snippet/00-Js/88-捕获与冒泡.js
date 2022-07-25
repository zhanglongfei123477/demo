// 一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。

// 第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
// 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
// 第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。
<div>
    <p>点击</p>
</div>

var phases = {
    1: 'capture',
    2: 'target',
    3: 'bubble'
};
var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', callback, true);
p.addEventListener('click', callback, true);
div.addEventListener('click', callback, false);
p.addEventListener('click', callback, false);

function callback(event) {
    var tag = event.currentTarget.tagName;
    var phase = phases[event.eventPhase];
    console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
}

// 点击以后的结果
// Tag: 'DIV'. EventPhase: 'capture'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'DIV'. EventPhase: 'bubble'

/*  addEventListener方法第三个参数的不同，会导致绑定两个监听函数），
 因此它们都会因为click事件触发一次。所以，<p>会在target阶段有两次输出。 */

/*  事件传播的最上层对象是window，
 接着依次是document，html（document.documentElement）和body（document.body）。
 也就是说，上例的事件传播顺序，在捕获阶段依次为window、document、html、body、div、p，
 在冒泡阶段依次为p、div、body、html、document、window。 */


// 事件传播到 p 元素后，就不再向下传播了
p.addEventListener('click', function (event) {
    event.stopPropagation();
}, true);

// 事件冒泡到 p 元素后，就不再向上冒泡了
p.addEventListener('click', function (event) {
    event.stopPropagation();
}, false);


//但是，stopPropagation方法只会阻止事件的传播，不会阻止该事件触发 < p > 节点的其他click事件的监听函数。也就是说，不是彻底取消click事件。

p.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log(1);
});
p.addEventListener('click', function (event) {
    // 会触发
    console.log(2);
});

//如果想要彻底取消该事件，不再触发后面所有click的监听函数，
//可以使用stopImmediatePropagation方法。
p.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
  console.log(1);
});
p.addEventListener('click', function(event) {
  // 不会被触发
  console.log(2);
});