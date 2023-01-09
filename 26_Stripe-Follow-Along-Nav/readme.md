
## 目標：
- 滑鼠滑進選單某個項目的時候
    - 選單對應的下拉內容出現（加上對應class）
    - 使用settimeout,在下拉內容出現的延後150ms，再加上class，達到漸入動畫效果
    - 取得下拉內容的寬高，設定成白底背景的寬高
    - 取得下拉內容的座標，經過計算(減去選單項目的left、top)，設定成白底背景的寬高

## 重點知識點
- this 在不同function內，指代的內容會不同。arrow function和一般function內的this內容也會不同
- 新增/刪除 class
- getBoundingClientRect，取得元素尺寸、位置
- 使用js動態新增inline style
- setTimeout
- querySelector取得畫面元素
- 綁定事件
- 判斷元素是否有某個class(classList.contains)

## 其它可加強的地方
- if條件簡化寫法
```
if(this.classList.contains('trigger-enter') ){
    this.classList.add('trigger-enter-active')
}
可簡化寫成：
this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')

```


<br />  
