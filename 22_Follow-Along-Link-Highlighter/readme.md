
## 目標：
- 選取畫面上所有的link
- 建立一個元素，用來顯示highlight
- link綁定mouseenter事件
- link在mouseenter後，使用getBoundingClientRect()取得該元素寬高位置資訊
- 更新hightlight元素的寬高位置等同於link
（動畫效果為使用css transition）


## 重點知識點
- mouseenter事件
- 使用getBoundingClientRect()，取得DOM元素的寬高位置資訊

## 其它可加強的地方
- 可以先抓一次this.getBoundingClientRect()存在變數內。不要重複抓取多次
- 元素需要用到的寬高位置等資訊，可以使用obj紀錄下來，code的可讀性高很多。
```
// Before 可讀性較差
highlight.style.width = `${this.getBoundingClientRect().width}px`;
highlight.style.height = `${this.getBoundingClientRect().height}px`;
highlight.style.transform = `translate(${this.getBoundingClientRect().window.scrollX}px, ${this.getBoundingClientRect().scrollY}px)`;
```
```
// After 可讀性較高
const linkCoords = this.getBoundingClientRect();

const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
};

highlight.style.width = `${coords.width}px`;
highlight.style.height = `${coords.height}px`;
highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

```
<br />  
