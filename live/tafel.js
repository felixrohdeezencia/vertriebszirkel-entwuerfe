/* Unterseiten: Menü und Klappen. Keine externen Anfragen. */
(function(){
  var knopf=document.querySelector('.menue'), nav=document.getElementById('hauptnav');
  if(knopf&&nav){
    var setzen=function(auf){knopf.setAttribute('aria-expanded',String(auf));nav.classList.toggle('offen',auf)};
    knopf.addEventListener('click',function(){setzen(knopf.getAttribute('aria-expanded')!=='true')});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('offen')){setzen(false);knopf.focus()}});
  }
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var Z='0123456789', B='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function spin(el, ziel, pool, schritte){
    if(reduce){return}
    var span=document.createElement('span'); el.textContent=''; el.appendChild(span);
    var n=0;
    (function tick(){
      n++;
      var fertig=n>=schritte;
      span.textContent = fertig ? ziel : (ziel.length>1 ? ziel.split('').map(function(){return pool[Math.random()*pool.length|0]}).join('') : pool[Math.random()*pool.length|0]);
      el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick');
      if(!fertig) setTimeout(tick, 55+n*6);
    })();
  }
  function laufen(scope){
    scope.querySelectorAll('[data-flip]').forEach(function(el,i){ setTimeout(function(){spin(el, el.dataset.flip, Z, 8+i*2)}, i*90) });
    scope.querySelectorAll('[data-word]').forEach(function(el,i){ setTimeout(function(){spin(el, el.dataset.word, B, 10+i*3)}, 300+i*140) });
  }
  var kopfTafel=document.querySelector('.buehne .tafel');
  if(kopfTafel) laufen(kopfTafel);
  var uhr=document.querySelector('.uhr');
  if(uhr&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(e){ if(e[0].isIntersecting){ laufen(uhr); io.disconnect() } },{threshold:.5});
    io.observe(uhr);
  }
})();
