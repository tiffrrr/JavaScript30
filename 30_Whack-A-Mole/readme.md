
## 目標：
- 點擊開始按鈕，遊戲開始，計分板規零
- 設定隨機時間、隨機位置，會出現地鼠（前一隻地鼠消失，一次只會出現一隻）
- 點擊到地鼠後，更新分數，地鼠消失
- 10秒後遊戲停止

## 重點知識點
- 數學函式：Math.round()、Math.random()、Math.floor()；
- setTimeout
- e.isTrusted:若事件物件是由使用者操作而產生， isTrusted = true。若事件物件是由程式碼所建立、修改，或是透過 EventTarget.dispatchEvent() 來觸發，則 isTrusted = false。

## 其它可加強的地方
- 使用了Math.random，有可能連續抽中同一個。可紀錄下前一個被抽中的選項，判斷如果這次抽中的跟前一個一樣，就重新抽
<br />  
