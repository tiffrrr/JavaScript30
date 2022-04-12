
## 目標：

1. 控制內距
2. 控制模糊
3. 控制邊框色

<br />  


## 重點知識點

- css variable(優點是，variable更改了，畫面上馬上就會同步，而scss則需要編譯過) 
  
- html：input range and input color(如果設計接受的話，感覺可以直接用。但就樣式比較難改)  
  
- 使用js得到html 的 data-*值
    ```
    <div id="test" data-num="111"></div>
    document.querySelector('#test').dataset.num // 輸出111
    document.querySelector('#test ').getAttribute('data-num'); // 輸出111

    ```
- 使用js修改css variable [MDN-setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)
    ```
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    ```
<br />  


