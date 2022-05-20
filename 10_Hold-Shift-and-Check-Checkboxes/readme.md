## 目標：

1. 選取checkbox的時候綁定change事件（原文綁定click事件，需要真的點到input才有作用）
2. 判斷當下是否按著shift
3. 若shift按著時，分別紀錄上一個改變的checkbox：A、本次改變的checkbox： B
4. 將AB之間的所有checkbox的check狀態改變為與B相同。


<br />  


## 重點知識點
1. 了解keyboard：e.shiftKey
2. 事件綁定