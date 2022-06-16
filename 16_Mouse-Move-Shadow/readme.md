
## 目標：
1. 偵聽滑鼠移動，並偵測滑鼠目前移到哪個位置
2. 根據滑鼠移動的位置，計算出shadow要往哪個方向、移動多少距離
3. 改變css text-shadow 參數，製造陰影隨著滑鼠變化的效果

<br />  


## 重點知識點
- mousemove事件，偵測滑鼠移動位置
- 算數，計算移動距離、改變方向等
- js改變css

## 其它知識點
- contenteditable
```
<h1 contenteditable>🔥WOAH!</h1>
```
- 雖然mousemove事件是在父層上監聽，但是取的offsetX / offsetY，會是取到e.target的
- 解構賦值
```
const { offsetWidth: width, offsetHeight: height } = hero;
let { offsetX: x, offsetY: y } = e;

相當於
const width = hero.offsetWidth
const height = hero.offsetHeight
let x = e.offsetX
let y = e.offsetY
```
- Math函數
<br />  
