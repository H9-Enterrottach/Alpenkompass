const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Microsoft Bookings: paste the public booking-page URL between the quotes.
const BOOKING_URL = "";
if (BOOKING_URL) { document.getElementById("booking-calendar").innerHTML = `<iframe src="${BOOKING_URL}" title="Termin bei Alpenkompass buchen" loading="lazy"></iframe>`; }
