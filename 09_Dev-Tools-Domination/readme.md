## 目標：

1. console的運用
<br />  


## 重點知識點
1. 一般console.log
2. %s：插入字符
3. $c：設定console.log樣式
4. console.warn，出現黃色提醒警告
5. console.error，出現紅色錯誤警告
6. console.info
7. console.assert：不滿足條件的話，噴錯，測試可用
8. console.clear() 清除所有console
9. console.dir(DOM)：查看DOM
10. console.groupCollapsed（） + console.groupEnd 可群組，收合console.log
    ```
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    ```
11. console.count():計數目前出現了幾次此訊息
12. console.time() + console.timeEnd(): 計算花費多少時間（可用在取得api）
13. console.table():使用表格顯示，更易閱讀