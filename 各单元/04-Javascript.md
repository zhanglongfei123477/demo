1. **异步与请求**

   - [ ] Fetch、axios、XHR-------手写及区别
   - [ ] Async Await与Promise核心代码（实现原理及all，race手写）
   - [ ] defer与async区别
   - [ ] 图片懒加载--------IntersectionObserver

2. **JS的运行原理**——浏览器架构方式、单线程、V8大体工作流程（1.解析器通过词法解析和语法解析生成AST-抽象语法树，2.再通过V8的解释器逐行来生成字节码，一边解释一遍执行，3.然后编译器优化并编译字节码生成优化的机器码）

3. **V8垃圾内存的回收**——JS单线程，一旦进入到垃圾回收，那么其他的各种逻辑都要暂停。V8把堆分成两部分（新生代和老生代），新生代是临时分配的内存，存活时间短；老生代是常驻内存、存活时间长；V8堆内存为两个内存和。新生代是From和to来回对调，新生代中变量多次回收还在的话就放在了老生代中，称之为晋升，老生代第一步标记清除，第二步粗暴的整理内存碎片。标记的时候还是增量标记也就是React fiber类似，让JS应用逻辑和垃圾回收标记交替执行。

4. **内存泄漏**------------意外的全局变量、闭包引起的内存泄漏、未清理的DOM元素引用、定时器。未清除事件监听、使用ES6中的weakset，weakmap弱引用不计入垃圾回收机制。

5. **执行上下文和执行栈+作用域链**----------首次会创建一个全局上下文，然后遇到一个函数调用时都会为该函数创建一个函数执行上下文并压入栈顶。创建执行上下文有两个阶段分为创建阶段和执行阶段，创建时三件事（this的绑定，创建词法环境组件{两个组件：环境记录器和一个外部环境的引用}，创建变量环境组件）。

6. **事件循环**

7. **原型与原型链**

   获取对象的原型对象三种---obj.__proto、obj.constructor.prototype、Object.getPrototypeOf

8. **闭包**

9. **类**

10. **继承**

   - [x] 原型链继承、构造函数继承、组合继承

11. **基本数据类型-**

    - [x] Symbol--唯一标识符的基本类型（隐藏对象属性和Js中的系统Symbol），及全局注册表的使用
    - [x] instanceof与typeof差异及解决、Object.prototype.toString.call
    - [x] 浮点数问题及解决方案、
    - [ ] var let与const区别-----块级作用域，无变量提升，不允许重复定义---const不可修改除引用，const声明后立马就要赋值
    - [ ] 对调两个变量方法（临时变量、加减法、数组法、对象法、按位异或、解构赋值 ）
    - [ ] ==和===运算符-------前者会先转换成同一个类型再用严格相等去比较（Nan === Nan，undefined和null与自身严格相等）；相等运算符比较时（原始类型互相比较时转换成数值在比较、对象与原始类型比较时先调用对象的valueOf，如果还是对象在调用toString进行比较，undefined和null自身互相比较或互相比较为true，其他都为false）
    - [ ] 数值、字符串、布尔三者的包装对象
    - [ ] 怎么让if(a==1&&a==2)条件成立

12. **函数相关**——

    - [ ] 实现call、apply和bind、
    - [ ] 函数柯里化--add那道问题、
    - [ ] 手写防抖节流及加强版--首次执行怎么搞、手写once
    - [ ] setTimeout实现setInterval
    - [ ] 箭头函数与普通函数区别----this上，能不能当构造上，arguments上，无原型，不能当Generator和使用yield，能使用async和await


12. **字符串**

    1. 包装对象
    2. length与类数组下标，concat与数组类似；
    3. slice与数组类似
    4. substr，第二个字符是长度；
    5. indexOf与lastIndexOf；
    6. toLowerCase()，toUpperCase()；
    7. split()---
13. **数组**

    - [ ] 数组判断----instanceof、Object.prototype.toString.call、Array.isArray、判断是否存在push等方法

    - [ ] 去重----forEach+includes/indexOf、Set、filter+indexOf、reduce+includes

    - [ ] 合并----concat、...运算符、遍历

    - [x] 展开----arr.flat、arr.join().split(',').map(Number)、arr.toString().split(',').map(Number)、递归push、递归concat

    - [ ] 分块

    - [ ] 取差异

    - [ ] 创建----Array()、Array.of()、Array.from()

    - [ ] 改变（8）----splice（表示删除的长度）、**sort-reverse**、**pop-shift-push-unshift**、copyWith、fill（数值，起始位置，长度）

    - [ ] 不改变（8）

      1. slice（浅拷贝，不包含末尾下标）
      2. join（变成字符串，引号代表什么也没有）
      3. tostring（有逗号，不建议使用）
      4. concat（浅拷贝），建议用扩展运算符
      5. indexOf、lastIndexOf、includes

    - [ ] 遍历数组（12）---

      1. forEach、every、some、
      2. filter、map————返回一个新数组
      3. reduce、reduceright
      4. find、findIndex（一个是值一个是下标，都是返回的是找到的第一个）
      5. keys-values-entries

    - [ ] forEach与map区别-----while才是遍历中的性能霸主；

      1. 本质上——for是个关键字，属于特殊语法，forEach是个函数，两者就不是一个东西，如果我要“Array.prototype.forEach=console.log”也可以啊，forEach只是一个包装出来的工具 ；

      2. 语法上（常规功能使用上）——都可用于遍历，“Array.prototype.forEach”本质上就是遍历的包装（注意，只是Array），因为“Array.prototype.forEach”是ES5的产物，迭代器“iterator”是ES6的产物，很明显，前期版本forEach跟迭代器没啥关系；Map和Set的forEach它们倒是跟迭代器相关；

      3. 性能上—— 性能对比方面我们加入一个 `map` 迭代器，它与 `filter` 一样都是生成新数组。 for>forEach>map;

         `for`：for循环没有额外的函数调用栈和上下文，所以它的实现最为简单。
          `forEach`：对于forEach来说，它的函数签名中包含了参数和上下文，所以性能会低于 `for` 循环。
          `map`：`map` 最慢的原因是因为 `map` 会返回一个新的数组，数组的创建和赋值会导致分配内存空间，因此会带来较大的性能开销。如果将`map`嵌套在一个循环中，便会带来更多不必要的内存消耗。
          当大家使用迭代器遍历一个数组时，如果不需要返回一个新数组却使用 `map` 是违背设计初衷的。在我前端合作开发时见过很多人只是为了遍历数组而用 `map` 的：

         又一题外话：“for in”是键值的遍历，属于特殊语法，“for of”是ES6的产物，它是迭代器的遍历方式，也属于特殊语法，不同的是“for of”需要对遍历对象进行一次判定，即存不存在“Symbol.iterator”属性，所以遍历空对象会报错，而“for in”不会；别看它们很像，它们原理可不一样 

14. **对象**——

    手写New、深浅拷贝

15. **创建对象的方式**------

    new空对象、对象字面量、

    工厂模式（instanceof无法标识）、 构造函数模式（解决了工厂模式的实例和构造的关联问题）、

    Object.create模式、ES6的class模式

16. **对象判断方式**---

    - [ ] Object.keys()与Object.getOwnpropertyNames()、
    - [ ] Object.prototype.hasOwnProperty()--不会遍历原型链、
    - [ ] in与for...in—前者通吃后者获取自身和继承的可遍历属性，for...in和hasOwnProperty搭配可获得自身可遍历属性；
    - [ ] Object.create
    - [ ] Object.assign
    - [ ]  使用`Object.freeze(obj)` 冻结obj,就能使其内的属性不可变,但它有局限，就是obj对象中要是有属性是对象，该对象内属性还能改变，要全不可变，就需要使用递归等方式一层一层全部冻结。 

17. **迭代器接口和for...of**——

    只要部署该接口就可以完成遍历操作，接口主要供for...of消费。

    具备接口的有Array、Map、Set、String、arguments对象、Nodelist对象。

    默认调用接口的有对数组和Set结构解构赋值、扩展运算符、yield*、还有其他任何接受数组作为参数的场合（for...of、Array.from()、Map()、Set()、Promise.all、Promise.race），

    一个数据结构只要部署了Symbol.iterator属性，就视为具有Iterator接口，就可以用for...of遍历。

    Set、Map该如何遍历以及数据的entries、keys、values该怎么用。

18. **for**与forEach、for...in、for...of的区别——forEach无法中途跳出循环、break和return不能用；

19. **Set、Map**——唯一性，弱引用与垃圾回收的关系

21. 事件捕获和事件冒泡

22. document.write和innerHTML区别

23. load事件---页面全部加载完才会执行，包括图片、视频等，(onload指定回调函数),

    DomcontentLoaded---dom解析完即可执行，render树构造之前，此时图片，视频还可能没有加载完
