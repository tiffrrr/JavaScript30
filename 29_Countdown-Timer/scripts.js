let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    //倒計時開始時的時間戳記(毫秒)
    const now = Date.now(); 

    //倒計時結束時的時間戳記(毫秒)，seconds*1000是因為時間戳記是用毫秒
    const then = now + seconds * 1000; 

    
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        //直接倒數的話，遇到一些事情setInterval會被暫停(ex:ios scroll時)
        // 所以要用結束時間戳記 - 現在時間戳記，來判斷剩下幾秒
        const secondsLeft = Math.round((then - Date.now()) / 1000); //時間戳記是毫秒所以要/1000
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    // const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
function startTimer() {
    const seconds = parseInt(this.dataset.time); // 拿到存在html data-time裡的秒數
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));
// html <form>有name屬性的話
// 可以直接 document.formName 抓到這個form
// 如果裡面的<input>有name屬性的話
// 可以直接document.formName.inputName 抓到input

//customForm 為<form name="customForm">
document.customForm.addEventListener('submit', function(e) { 
    e.preventDefault(); //防止畫面reload
    // this.minutes = document.customForm.minutes
    // 就是 <form name="customForm"> 裡面的<input name="minutes">
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});
