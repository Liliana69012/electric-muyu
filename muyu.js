let count = 0;

function beat() {
  // 动画效果
  let muyu = document.getElementById('muyu');
  muyu.style.transform = 'scale(1.1)';
  setTimeout(function(){ 
    muyu.style.transform = 'scale(1)'; 
  }, 200);
  
  // 点击次数计数
  count++;
  document.getElementById('counter').innerText = '累计积累功德' + count + '次';
}

function reset() {
  // 重置计数器
  count = 0;
  document.getElementById('counter').innerText = '累计积累功德0次';
}
