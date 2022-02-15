var img = document.getElementById('img');
var start = document.getElementById('start');
var stopbtn = document.getElementById('stopcar');
var m = 0;
var y;

start.addEventListener('click', function(){
   y = setInterval( fun ,100);
  function fun() {
    if(m == 1200){
      clearInterval(y)
      m = 0
    }else{
      m+= 5;
      img.style.marginLeft = m + 'px';
    }
  }
});
  


stopbtn.addEventListener('click', function(){
  clearInterval(y)
})

