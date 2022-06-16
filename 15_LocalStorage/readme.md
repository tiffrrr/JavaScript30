
## 目標：
1. 進來頁面時，載入localStorage內的list資料（若初次進來，則為空）
2. 更新html，將list顯示在畫面上
3. 輸入框填寫資料後，按下按鈕新增資料
4. 將資料新增進localStorage
5. 更新html，list內加入新項目
6. 清空input
7. 點擊每一項，checkbox要切換勾選狀態
8. 將勾選狀態更新至localStorage、html

<br />  


## 重點知識點
1. local storage（原理、新增資料、讀取資料等操作）
2. event delegation(動態新增的li DOM不會有事件，可以將事件下在父層ul，就不需要每個li都綁事件)
3. JSON的操作：JSON.stringify JSON.parse
4. form submit事件（預設會reload畫面）
5. 使用form.reset(),來reset form

## 其它可加強的地方
1. form submit事件 / reset
2. function可切乾淨，做成獨立的，傳參數進來。可分開使用
3. localStorage的使用，需要JSON.stringify JSON.parse
4. 頁面初始化list時不用先宣告空陣列後再放資料進來，可以在宣告時就直接拿資料
   ```
   const items = JSON.parse(localStorage.getItem('plates')) || [];
   ```


<br />  
