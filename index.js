let ids=document.querySelector('#start')
let reset = document.querySelector('#reset')
let lap = document.querySelector('#lap')
let lapsContainer = document.querySelector('#laps')
let [hours,minutes,seconds,milliseconds]=[0,0,0,0]
let time=document.querySelector('.timer')
let int;
let isRunning=false
ids.addEventListener('click',()=>{
  if (isRunning){
    clearInterval(int)
    ids.textContent='START'
  }
  else{
    int=setInterval(displaytimer,1)
    ids.textContent='STOP'
  }
  isRunning=!isRunning
})
reset.addEventListener('click', () => {
  clearInterval(int);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0]
  time.innerHTML = '00h : 00m : 00s' 
  ids.textContent = 'START'
  isRunning = false 
  lapsContainer.innerHTML = ''
});
lap.addEventListener('click', () => {
  if (isRunning) {
      let lapTime = time.innerHTML;
      let lapElement = document.createElement('div');
      lapElement.className = 'lap';
      lapElement.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
      lapsContainer.appendChild(lapElement);
  }
});
function displaytimer(){
  milliseconds+=10
  if (milliseconds==1000){
    milliseconds=0
    seconds++
  if (seconds==60){
    seconds=0
    minutes++
  if (minutes==60){
    minutes=0
    hours++
  }
}
}
let h=hours<10?'0'+hours:hours
let m=minutes<10?'0'+minutes:minutes
let s=seconds<10?'0'+seconds:seconds
let ms=milliseconds<10?'00'+milliseconds:milliseconds
time.innerHTML=`${h}h : ${m}m : ${s}s `
}
ids.addEventListener('click',()=>{
ids.style.color='red'
})
lap.addEventListener('click',()=>{
   lap.style.color='red'
})
reset.addEventListener('click',()=>{
  reset.style.color='red'
})