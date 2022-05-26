## 目標：

1. 使進度條反應目前播放進度
2. 點擊/拖拉進度條，影片跳轉至對應位置
3. 點擊播放鈕切換 播放/暫停
4. skip(前進25s、後退10s)影片
5. 調整音量
6. 調整播放速度
<br />  


## 重點知識點
1. vedio的屬性、方法、事件  
    https://www.w3schools.com/tags/ref_av_dom.asp
    
    ```
    屬性
    video.paused 是否暫停
    video.currentTime 目前播放位置
    video.duration 影片總長度
    video.playbackRate 影片播放速度(半速、正常、兩倍速...)
    video.volumn (0~1) 影片音量
    ```
    ```
    方法
    video.play()  播放影片
    video.pause() 暫停影片
    ```
    ```
    事件
    timeupdate 當影片播放位置改變時trigger
    ```


## 其它知識點
1. HTML data-*，及使用方式
2. 綁定mouse / click事件及其事件屬性(e.offsetX...)
3. 使用js改變css
4. 注意影片載入需要時間，一進來就取值的話，可能會取不到。可使用loadedmetadata，載入完成後再執行。