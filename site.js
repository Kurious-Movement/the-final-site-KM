document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if(btn && menu){
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e)=>{
      if(!menu.contains(e.target) && !btn.contains(e.target)){ menu.classList.add('hidden'); }
    });
  }

  const arrow = document.getElementById('bgArrow');
  if(arrow){
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.2;
      arrow.style.transform = `translateY(${y}px)`;
    });
  }
});