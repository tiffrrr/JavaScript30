
## 目標：

1. 鍵盤按下後播出對應聲音
2. 鍵盤按下後產生特效
3. 在按下其他鍵後會關閉該特效並於新按鍵中啟用。

<br />  


## 重點知識點

- audio 
    [Mozilla](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)
    ```
    <audio src="sounds/xxx.wav"></audio>

    audio.play();
    ```


- KeyboardEvent  
鍵盤每個按鍵按下去會有對應的號碼，可以判斷按了什麼鍵  
但是mozilla查.keyCode已Deprecated，不推薦使用。  
[查詢keycode網址](https://keycode.info/)  
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
    ```
    window.addEventListener("keydown", function (event) {
    console.log(event)
    })
    ```


- 綁定事件：addEventListener（keydown/transitionend)
- this（不要亂用） 
- arrow function 
- const/let/var 的差別 


<br />  

## 其它知識點
- 選取dom(querySelector/getElementById/...)
- 新增/刪除 class
- array.forEach
- 事件的：event,e.target
- ``與${}
- data-* 自訂屬性 [Mozilla](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Global_attributes/data-*)



