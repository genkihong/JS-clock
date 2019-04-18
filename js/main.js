;(function() {
  const seconds = document.querySelector('.second-hand');
  const mins = document.querySelector('.min-hand');
  const hour = document.querySelector('.hour-hand');
  
  function setClock() {
    let now = new Date();
    
    let secondsDeg = now.getSeconds() * 6 + 180; // 秒針1格6度(起始位置在30分，所以+180度)
    console.log('秒', now.getSeconds());
    // console.log('秒針角度', secondsDeg);
    let minsDeg = now.getMinutes() * 6 + now.getSeconds() * (6/60); // 分針1格6度 + 秒針/10
    let hourDeg = now.getHours() * 30 + now.getMinutes() * (30/60) - 90; // 時針1格30度 + 分針/2(起始位置在15分，所以-90度)
    
    seconds.style.transform = `rotate(${secondsDeg}deg)`;    
    mins.style.transform = `rotate(${minsDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
  }
  
  function timeoutHandler() {
    setClock();
    setTimeout(timeoutHandler, 1000);
  }
  
  function animationHandler() {
    setClock();
    window.requestAnimationFrame(animationHandler);
  }

  setClock(); // 初始化

  // 計時器 setInterval, setTimeout, requestAnimationFrame
  // setInterval(setClock, 1000); // 每1秒執行setClock
  setTimeout(timeoutHandler, 1000); // 延遲1秒執行timeoutHandler
  // window.requestAnimationFrame(animationHandler); // 在瀏覽器產生動畫
})();
