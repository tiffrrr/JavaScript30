
## 目標：
- 理解capture bubble 事件捕獲/冒泡概念。
- e.stopPropagation(); 停止冒泡
- once
## 重點知識點
- capture:從外(body)到內：若下事件時加上{capture:true}，事件會是在這個階段被觸發
- bubble：從內到外(body)：預設事件是在這個階段被觸發
- e.stopPropagation(); 停止冒泡
- once：加上的話，事件只會執行第一次，然後就會unbind

<br />  
