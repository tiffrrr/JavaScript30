
// 進度條反應目前播放進度
// 點擊/拖拉進度條，影片跳轉至對應位置
// 點擊播放鈕切換 播放/暫停
// skip(前進25s、後退10s)
// 控制影片音量
// 控制影片播放速度



const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress');
const toggleBtn = document.querySelector('.player__button.toggle');
const volume = document.querySelector('input[name= volume]');
const playbackRate = document.querySelector('input[name= playbackRate]');
const skipBtns = document.querySelectorAll('.player__button[data-skip]');
// === 點擊播放鈕切換 播放/暫停 ===
toggleBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        toggleBtn.innerHTML = '❚ ❚';
    } else {
        video.pause();
        toggleBtn.innerHTML = '►';
    }
})


// === 進度條反應目前播放進度 ===
video.addEventListener('timeupdate', function () {
    document.querySelector('.progress__filled').style.flexBasis = (video.currentTime / video.duration) * 100 + '%';
})

// === 點擊/拖拉進度條，影片跳轉至對應位置 ===
function handleVideoByProgressBar(e) {
    video.currentTime = e.offsetX / progress.clientWidth * video.duration;
}
progress.addEventListener('click', (e) => handleVideoByProgressBar(e));
// 按著時才偵測mouse移動
let isMouseDown = false;
progress.addEventListener('mousedown', () => isMouseDown = true);
progress.addEventListener('mousemove', (e) => isMouseDown && handleVideoByProgressBar(e));
progress.addEventListener('mouseup', () => isMouseDown = false);

// === skip(前進25s、後退10s) ===
skipBtns.forEach(skipBtn => skipBtn.addEventListener('click', function () {
    video.currentTime += skipBtn.dataset.skip * 1
}))

// 控制影片音量
volume.addEventListener('change', function () {
    video.volume = volume.value;
    //   video[this.name] = this.value;

})
// 控制影片播放速度
playbackRate.addEventListener('change', function () {
    video.playbackRate = playbackRate.value;
    //   video[this.name] = this.value;

})