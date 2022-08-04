## 目標：
1. 請求影音權限
2. 取得影音串流的內容，並將內容放到video內播出顯示在畫面上。
3. 將video的畫面更新到canvas上
4. 按按鈕拍攝，並且播放音檔
5. 把拍下來的內容放到畫面上，並且可下載。
6. 在canvas為影片加上特效。

## 重點知識點: 
- 請求影音權限－MediaDevices API(回傳一個 Promise)
    https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/mediaDevices
    ```
    navigator.mediaDevices.getUserMedia({video:true,audio:true})
    ```
- 將MediaStream放到video內，在畫面上播出：
    ```
    video.srcObject = stream;
    video.play();
    ```
- video事件，可播放時再執行function
    ```
    video.addEventListener('canplay', paintToCanvas)
    ```
- canvas - 將畫面放入canvas畫布中
    ```
        ctx.drawImage(video, 0, 0, width, height);
    ```
- canvas - 加上後製特效
  ```
    // 製作特效（把canvas內容拿出來 -> 加上特效 -> 放回canvas）
    let pixels = ctx.getImageData(0, 0, width, height); //一個類陣列，裡面包含每個像素點（有幾百萬個）
    pixels = redEffect(pixels); // 加上特效
    ctx.putImageData(pixels, 0, 0);
  ```
- canvas - 了解getImageData的內容，知道如何改變來加上特效
```
    // pixels是一個類陣列，裡面包含每個像素點（有幾百萬個）
    // 1-4（分別為rbga）=第一個像素點，5-8=第二個像素點...
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
```
- setInterval
