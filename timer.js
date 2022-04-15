const hourElm = document.querySelector('.hour')
const minElm = document.querySelector('.minute')
const secElm = document.querySelector('.second')
const miliElm = document.querySelector('.milisecond')


class Timer {
   constructor(hours = 0,min = 0,sec = 0,milisecond = 0){
this.hours = hours
this.min  = min
this.sec  = sec
this.milisecond = milisecond
}
start(){
 this.interval = setInterval(()=>{
   this.milisecond++
   
   if(this.milisecond<9){
   miliElm.innerText = '0' + this.milisecond
   }
   if(this.milisecond>9){
   miliElm.innerText = this.milisecond
   }
   if(this.milisecond>99){
   this.sec++ 
   secElm.innerText = '0' + this.sec
   this.milisecond = 0
   miliElm.innerText = '0' + this.milisecond
   }
   if(this.min===59 && this.sec === 60){
      this.sec = 0
      this.min = 0
      this.hours++
         hourElm.innerText = '0' + this.hours
         minElm.innerText = '0' + this.min
         secElm.innerText = '0'+ this.sec
   }else if (this.sec === 60 ){
      this.sec = 0
      this.min++
      if(this.min >=10){
         hourElm.innerText = '0' + this.hours
         minElm.innerText = this.min
         secElm.innerText = '0'+ this.sec
      }else if(this.min<=9){
      minElm.innerText = '0' + this.min
      secElm.innerText = '0'+ this.sec
   }  
   }else if(this.min > 9 && this.sec < 10){ 
      minElm.innerText = this.min
      secElm.innerText = '0'+this.sec
   }else if(this.min> 9 && this.sec > 9){  
      minElm.innerText = this.min
      secElm.innerText  = this.sec
   }else if(this.sec < 10 ){   
      secElm.innerText = '0'+this.sec
   }else if(this.sec> 9 ){
      secElm.innerText = this.sec
   }
 },10)       
}

pause(){
  clearInterval(this.interval)
  this.re = true
  this.clear = true
}
resume(){
   if(this.re) this.start() 
   this.re = false
}
reset(){   
   if(this.clear) { 
 this.sec = 0
 this.min = 0
 this.hours = 0
 this.milisecond = 0
         hourElm.innerText = '0' + this.hours
         minElm.innerText =  '0' + this.min
         secElm.innerText =  '0'+ this.sec
         miliElm.innerText = '0' + this.milisecond
 this.clear = false
}
}
}
const time = new Timer()
const startButton = document.getElementById('startTimer'.innerHtml)
const pauseButton = document.getElementById('pauseTimer'.innerHtml)
const resumeButton = document.getElementById('resumeTimer'.innerHtml)
const resetButton = document.getElementById('resetTimer'.innerHtml)


      


  
