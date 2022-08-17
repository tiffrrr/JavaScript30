
## 目標：
- 設定預設文字
- 取得支援的語音列表（en/zh/...），並顯示下拉選單在畫面上（可選擇是否filter一下，不然選項很多）
- 從下拉選單選擇語言後，設定語言，cancel目前正在播放的語音，開始播放新語音
- 修改速度、音調、文字內容後，設定語音，cancel目前正在播放的語音，開始播放新語音
- 點擊speak btn，cancel目前正在播放的語音，開始播放新語音
- 點擊stop btn，cancel目前正在播放的語音

## 重點知識點
- Web Speech API: SpeechSynthesis  
為語音合成伺服器的控制器，可透過其來取得可使用的語音合成資訊，並播放或暫停發音等相關功能。



- SpeechSynthesisUtterance說出來的東西  
包含可讓語音合成伺服器辨識的資訊，例如語言、音調、聲音、速率等。  
(https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesisUtterance)
    ```
    屬性：
    lang: ""
    onboundary: null
    onend: null
    onerror: null
    onmark: null
    onpause: null
    onresume: null
    onstart: null
    pitch: -1
    rate: -1
    text: ""
    voice: null
    volume: -1
    ```
## 其它可加強的地方
- 一些討論：https://gist.github.com/Eotones/d67be7262856a79a77abeeccef455ebf
<br />  
