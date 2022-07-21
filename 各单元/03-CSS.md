id**选择器**、类选择器、标签选择器、通配选择器

+ 后代选择器、子选择器、并集选择器、伪类选择器

  ​         链接伪类选择器，：link/：visited/：hover/：active

  ​         focus伪类选择器：focus

  ​         结构(位置)伪类选择器，：first-child、：last-child，：nth-child(n)，：nth-last-child(n)

  ​         目标伪类选择器：target

+ 伪元素选择器，帮助创建新标签元素，而不需要HTML标签，从而简化HTML结构，属于行内元素，在文档树中找不到的，所以称为伪元素，和标签选择器一样，权重为1

  ::before在父元素内容的前面创建元素，::after在后面，

+ 块元素、行内元素、行内块元素

+ incline-block的空白问题及解决方法

  ​		删除html的空白

  ​		设置负边距

  ​		给父级设置font-size：0

  ​		加注释

+ display：(block，incline，incilne-block)

+ 单行文字垂直居中，水平居中

+ box-sizing(border-box，content-box)

+ 直接设置border-width为什么显示不出来，(border-style)

+ border-collapse

+ margin可以让块级元素水平居中(盒子要设置宽度)，行内或行内块水平居中给其父及元素添加text-align：center；

+ margin定义块元素的垂直外边框时，相邻外边距合并、嵌套垂直外边距塌陷

+ BFC：CSS将HTML的每个元素都当成一个盒子，都有一套正常的语法规则或者叫渲染规则，触发BFC之后会触发另一套语法规则(1.隔离的独立容器，2.计算BFC高度时，浮动子元素也参与计算，3.垂直方向放置，4.相邻元素的margin会发生重叠）；应用场景：清除浮动，避免某元素被浮动元素覆盖，阻止外边距重叠

  ​				html根元素

  ​				float元素：left/right

  ​				overflow：hidden、scroll、auto

  ​				position：absolute、fixed

  ​				display：incline-block，table-cell，table-caption

  

+ ----------------------------------------------------------------------------------------------------------------------------------

  浮动(脱标、行内块、不占用原来位置)，多个块级纵向找标准流，横向找浮动。浮动之后影响后面的标准流。

  浮动后是行内块元素的特性，未指定宽度时大小由内容决定，盒子中间无缝隙紧挨在一块。

+ 清除浮动原因、本质、策略、方法

  ​						额外标签法

  ​						父级添加overflow属性

  ​						父级添加after伪元素

  ​						父级添加双伪元素

+ 浮：在其他标准流盒子上面、漏：脱标、特：与标准流父级搭配使用，行内块

+ float：left与position：absolute的对比

+ float：left与incline-block的对比

  

+ --------------------------------------------------------------

  CSS属性书写顺序(布局定位--自身--文本--其他)

+ 页面布局分析(确定页面的版心---行模块，每个行模块的列模块---结构样式---运用盒子模型原理)

  

+ -----------------------------------------------------------------------------------

  为什么需要定位，定位组成=定位模式+边偏移，

+ static静态定位

+ relative(相对于原来的位置，位置继续占有，未脱标)

+ absolute(脱标，以最近一级的定位祖先元素为参考点，没有找document)

+ fixed(以浏览器为参考点，脱标，不随滚动条滚动)

+ sticky(以浏览器为参考点，位置继续占有，未脱标)

+ 子绝父相的由来

+ 定位叠放次序(z-index)，数值越大越靠上，定位盒子才有z-index属性，只有相对、绝对和固定有此属性

+ 定位的拓展，

  ​              1.绝对定位的盒子如何居中，margin设置左右auto无效

  ​              2.绝对定位和固定定位也和浮动类似，行内添加这两个可以直接设置高和宽，块添加后不给宽和高，默认是内容大小

  ​              3.脱标不会触发外边距塌陷。浮动和绝对(固定)不会触发外边距合并的问题

  ​              4.绝对定位(固定定位)会完全压住盒子，浮动也会，但不会压住里面的文字

+ 一个完整的盒子是标准流、浮动、定位一起完成布局的

+ 绝对定位的盒子设置margin:auto无效，要left50%再外边距一半就好了

+ 元素添加了绝对定位和固定定位之后会变成行内块，直接设置宽高就好了。

  

+ ----------------

  行内元素添加了绝对定位和固定定位变成了行内块，直接给定高和宽，和浮动一样

  

+ ---------------------

  元素的显示与隐藏：display：none/block（隐藏后不再占有原来位置），visibility：visible/hidden（隐藏后继续占有原来位置），overflow指定了如果内容溢出一个元素的框，会发生什么，只针对溢出的部分处理：visible、hidden、scroll、auto

  

  ------------------

+ CSS三大特性，层叠性、继承性、优先级

+ CSS三大模块，盒子模型、浮动、定位

+ 样式优先级(权重值)

  ​						标签，伪元素：	0001

  ​						属性，类，伪类：0010

  ​						ID：             	     0100

  ​						行内样式：      	 1000

  ​                        !important：无穷大

  ​                        继承的权重为0。

- 层叠上下文和层叠顺序

  层叠上下文三种方法：<html> <html/>，position为非static且z-index为具体值，CSS3新属性。

  层叠顺序：z-index<0-------block------------float--------------incline/incline-block-----------z-index>0

  

--------------------------

- CSS3新属性

  ​		transition：过渡

  ​		transform：旋转、缩放、移动、倾斜

  ​								translate--移动，不会影响到其他元素

  ​								rotate--旋转，里面为度数，旋转中心点为元素中心点

  ​								transform-orgin--转换中心点

  ​								scale--缩放，不影响其他盒子

  ​								transform()：translate()  rotate()  scale().....等，位移放前面

  ​		animation：动画

  ​		gradient：渐变

  ​		box-shadow：盒子阴影，不占用空间，不会影响其他盒子排列

  ​		border-radius：圆角边框

  ​		text-overflow：文字超出部分处理

  ​		text-shadow：文字阴影 

  ​		box-sizing：盒模型

  ​		媒体查询：`@media screen and (max-width: 960px)`  

- 文字单行省略号、多行省略号

- CSS3可继承的属性

- 画三角形(border-left-color：red )，扇形，半圆/椭圆/圆(border-radius)，

  

- --------------------------------

  脱离文档流是不是该元素从DOM树中脱离

- float与position的脱标的区别

- incline-block的使用场景

- 设置了绝对定位的元素相对于谁进行定位，如果其定位的父级设置了padding或者border怎么定位

- margin：auto，position：fixed为什么能实现垂直居中

- position：fixed什么时候失效

  

  --------------------------------------------

- 回流与重绘？

  ​			触发回流的操作

  ​							DOM的几何属性：宽、高、内外边距、left、top、border等

  ​							DOM节点发生增减或移动

  ​							读写offset、scroll、client

  ​							window.getcomputestyle方法

  ​			触发重绘的操作

  ​							DOM修改样式，并未影响到几何属性

  回流会重新经过样式计算、生成布局树、建立图层树、再到生成绘制列表、显示器显示

  重绘没有导致几何属性变化、会跳过生成布局树和建立图层树阶段、直接生成绘制列表，然后继续进行分块、生成位图等后面一系列操作。

  如何避免回流和重绘？

  ​			style---class

  ​			动画

  ​			display

  ​			creatDocumentFragment批量操作

  ​			resize和scroll进行节流与防抖

  ​			避免频繁读取

  ​			CSS3新属性

- GPU加速的原因

- rem、em、vw、vh

   em作为font-size的单位时，其代表父元素的字体大小，em作为其他属性单位时，代表自身字体大小 ，

   rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小 

- vertical-align的应用：图片、表单和文字对齐（只针对于行内元素和行内块元素有效）；解决图片底部默认空白缝隙问题（主要有两种，另一种是display：block）

- 常见布局技巧

  ​			margin负值运用

  ​			文字围绕浮动元素

  ​			行内块巧妙运用

  ​			CSS三角强化

  

- -------------------------------------

  **Flex布局**---就是通过给父盒子添加flex属性来控制子盒子的排列方式和位置

  父项属性：

  ​			flex-direction---设置主轴方向

  ​			justify-content---主轴上子元素排列方式

  ​			flex-wrap---子元素是否换行

  ​			align-content---侧轴上子元素排列方式--多行

  ​			align-items---侧轴上子元素排列方式--单行

  ​			flex-flow---复合属性，相当于同时设置了flex-direction和flex-wrap属性

  子项属性：

  ​			flex子项目占的份数

  ​			align-self控制子项自己在侧轴的排列方式

  ​			order定义子项的排列顺序

- **display**有哪些值，作用

```
block	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
none	元素不显示，并从文档流中移除。
inline	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
list-item	像块类型元素一样显示，并添加样式列表标记。
table	此元素会作为块级表格来显示。
inherit	规定应该从父元素继承display属性的值。
```

- **Flex  box**(弹性盒布局模型)

  ```
  以下6个属性设置在容器上。
  flex-direction属性决定主轴的方向（即项目的排列方向）。
  flex-wrap属性定义，如果一条轴线排不下，如何换行。
  flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
  justify-content属性定义了项目在主轴上的对齐方式。
  align-items属性定义项目在交叉轴上如何对齐。
  align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  
  以下6个属性设置在项目上。
  order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
  flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认
  值为auto，即项目的本来大小。
  flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。
  align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父
  元素的align-items属性，如果没有父元素，则等同于stretch。
  ```
  
- -----------------------------

  -----------------------------------------------------
## 居中问题

**水平居中**

1. 文本、行内元素、行内块元素------------text-align：center【该属性只控制行内内容（文字、行内元素、行内块元素）如何相对于他的块父元素对齐】
2. 单个块元素------------------------margin：0 auto
3. 多个块元素-----------------------先diaplay变成行内块，再text-align：center，注意**空白间隙**的解决
4. 利用绝对定位---------***【原理：子绝父相，top、right、bottom、left的值是相对于父元素尺寸的，然后margin或者transform是相对于自身尺寸的，组合使用达到水平居中的目的】***--------子绝父相，先left：50%，再margin-left或者transform：translateX自身一半；
5. 利用定位----------------直接absolute，直接上下左右都为0，然后设置margin：auto可以水平垂直居中；
6. flex布局-----------------justify-content：center

**垂直居中**

1. 单行文本、行内元素、行内块元素------------line-height=height，多行的话line-height除一下
2. 图片----------------vertical-align：middle
3. 绝对定位---------------同上（margin-top或者translateY）
4. flex----------------align-items：center；

**水平垂直居中**

1. 行内、行内块、图片---------父级line-height=height，text-align：center；
2. 绝对定位-------同理子绝父相；
3. 绝对定位-------直接absolute，直接上下左右都为0，然后设置margin：auto可以水平垂直居中；***【原理： 当top、bottom为0时,margin-top&bottom设置auto的话会无限延伸占满空间并且平分；当left、right为0时,margin-left&right设置auto的话会无限延伸占满空间并且平分】*** 
4. flex布局------ justify-content: center;    align-items: center; 

## 两列布局(见代码)

  ​	float+margin

  ​	float+overflow

  ​	父亲相对定位，两个儿子绝对定位，一个定宽，另一个利用top、left、right属性；

  ​	flex：左width:100px,右lex:1

  ​	grid：grid-template-columns：100px  1fr,   十分厉害

- 两列（盒子宽度随内容变化而变化，另一个自适应）

  float+overflow，左浮动不设宽度，右overflow：hidden

  flex：左不设宽度，右flex为1

  Grid： grid-template-columns: auto 1fr; 左右均不设宽度

## 三列布局(见代码)

  **子绝父相：**

  **flex布局**：父盒子diaplay：flex，子盒子左右定宽后，中间为flex：1----占一份。

  **Grid布局**：父盒子四个属性

  ​		display：grid；

  ​		grid-template-areas：“head head head ” “left content right ” "footer footer footer ";

  ​		grid-template-rows：50px 1fr 50px；

  ​		grid-template-columns：100px 1fr 100px；

  ​				  子盒子一个属性：

  ​				  grid-area：head

  **圣杯布局**

  左中右被用一个父标签所包裹，中在上，左右在下，父亲设置一个padding，中左右全部浮动，然后左右margin负值与中在一行，再利用relative将左右移到两边

  **双飞翼布局**

  中在上，左右在下，中单独一个子盒子，里面的小盒子采用margin的方式左右撑开，左右到两边的方式和圣杯一样
