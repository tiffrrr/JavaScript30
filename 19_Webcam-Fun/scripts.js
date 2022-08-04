const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    // 請求影音權限，並且回傳一個 Promise
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            // 取得影音串流的內容:stream，將內容放到video內播出
            // ** depreciate: createObjectURL no longer accepts media stream object **
            // video.src = window.URL.createObjectURL(stream)
            // ** new way **
            video.srcObject = stream;
            video.play();

        })
        .catch(err => {
            alert('please allow webcam', err)
        })
}
function redEffect(pixels) {
    // pixels是一個類陣列，裡面包含每個像素點（有幾百萬個）
    // 1-4（分別為rbga）=第一個像素點，5-8=第二個像素點...
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

function paintToCanvas() {
    // 設定canvas的寬高等於影片尺寸
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    // 將video的內容同步到canvas畫布上
    // 需要return，這樣如果想要停止的時候才吃得到他
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // 製作特效（把canvas內容拿出來 -> 加上特效 -> 放回canvas）
        let pixels = ctx.getImageData(0, 0, width, height); //一個類陣列，裡面包含每個像素點（有幾百萬個）
        // pixels = redEffect(pixels);
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // 播放拍攝音效
    snap.currentTime = 0;
    snap.play();

    // 從canvas上截圖下來(data 會是 base64)
    const data = canvas.toDataURL('image/jpeg');

    // 把截圖畫面放到畫面上，並且可下載。
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'screenshot');
    link.innerHTML = `<img src=${data}>`
    strip.append(link);
}



// getVideo();
video.addEventListener('canplay', paintToCanvas)