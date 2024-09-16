var textEl=document.querySelector('.text')

var count=0;

var totalEl=document.querySelector('.total')

var remainEl=document.querySelector('.remain')

var resetEl =document.querySelector('.reset')

textEl.addEventListener('keyup',jay)

textEl.addEventListener('paste',jay)

function jay(){
  count++;
  
  if(count<=50){
  console.log(count);
  totalEl.innerHTML =`total ${count}`
  remainEl.innerHTML=`remain ${50-count}`
  }
  }
  function reset(){
    count=0;
    totalEl.innerHTML =`total ${count}`
  remainEl.innerHTML=`remain ${50-count}`
  textEl.value=""
    
  }