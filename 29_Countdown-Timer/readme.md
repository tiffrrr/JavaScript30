
## 目標：
- 製作倒計時器：輸入秒數後開始倒計時，剩餘秒數歸零則倒計時結束
- 將剩餘分鐘+秒數 顯示在畫面上
- 將計時器結束時的時間顯示在畫面上
- 點擊按鈕，設定該按鈕顯示的倒數時間，開始倒計時。
- 在輸入框輸入時間，按enter後，開始倒計時。


## 重點知識點
- Date的處理
    - Date.now() 回傳當前的 timestamp（毫秒）
    - new Date(timestamp) 使用timestamp還原出現在的時間
    - date.getHours()、date.getMinutes() 取得時間的小時、分鐘
- setInterval / clearInterval (用setInterval後一定要設立停止點，不然就會一直執行下去)
- 數學函式：parseInt()、Math.floor()、Math.round() ...
- 數學計算：分鐘、秒等時間的換算
- html < form >有name屬性的話可以直接 document.formName 抓到這個form<br>如果裡面的< input >有name屬性的話，可以直接document.formName.inputName 抓到input
- form的處理：
    - submit事件
    - reset()重設
    - 使用e.preventDefault() 防止預設reload頁面
## 其它可加強的地方
- 直接用setInterval倒數的話，可能會遇到一些事情暫停setInterval(ex:ios scroll時)
 <br>
 所以要用結束時間戳記 - 現在的時間戳記，來判斷剩下幾秒，這樣即使setInterval被暫停也不會影響


<br />  
