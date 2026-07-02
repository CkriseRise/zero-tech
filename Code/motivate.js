let i = 1;
let j = 1;
function changeText() {
  document.getElementById('msg').textContent = i++ % 2 == 0 ? '你刚刚触发了一段 JavaScript。' : '这是我的第一个网页，现在它有了一点样式。';
  document.querySelector('button').textContent = j++ % 2 == 0 ? '点我还原' : '点我试试';
  
}