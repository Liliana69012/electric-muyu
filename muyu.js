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

var textElement = document.getElementById('your_text_element_id');
textElement.style.transition = 'opacity 0.5s';  // 增加渐变效果

function changeText() {
    textElement.style.opacity = '0';  // 文字先透明
    setTimeout(function() {
        // 这里调用API获取文字后：
        textElement.innerText = '你的新文案';
        textElement.style.opacity = '1';  // 文字渐渐出现
    }, 500);  // 0.5秒后执行
}

function fetchQuote() {
    fetch('https://quotes.rest/qod?language=en')  // 请求API
        .then(response => response.json())  // 获取并解析响应
        .then(data => {
            var quote = data.contents.quotes[0].quote;  // 从响应中提取文案
            document.getElementById('your_text_element_id').innerText = quote;  // 显示文案
        })
        .catch(error => console.error('Error:', error));
}

// 当网页被加载时调用fetchQuote获取初始文案
window.onload = fetchQuote;
