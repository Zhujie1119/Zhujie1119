// Mac 风格语言切换逻辑
const langBtn = document.getElementById('langBtn');
const zhContent = document.getElementById('zhContent');
const enContent = document.getElementById('enContent');
const updateDate = document.getElementById('updateDate');

// 自动设置更新日期为当前日期（Mac 格式）
const today = new Date();
const formattedDate = today.toLocaleDateString('zh-CN', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});
updateDate.textContent = formattedDate;

// 语言切换事件
langBtn.addEventListener('click', () => {
  if (zhContent.classList.contains('active')) {
    // 切换到英文
    zhContent.classList.remove('active');
    enContent.classList.add('active');
    langBtn.textContent = '中文';
    document.documentElement.lang = 'en';
  } else {
    // 切换到中文
    enContent.classList.remove('active');
    zhContent.classList.add('active');
    langBtn.textContent = 'English';
    document.documentElement.lang = 'zh-CN';
  }
});
