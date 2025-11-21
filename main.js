
// Simple JS for slider, mobile menu, and demo account data
document.addEventListener('DOMContentLoaded',function(){
  // service slider for homepage
  const slides = ["Sofa Cleaning","Curtain Cleaning","Steam Curtain Cleaning","Nano Coating","Glass Coating","Carpet Cleaning","Steam Cleaning"];
  let idx=0;
  const slideEl = document.getElementById('service-rotator');
  if(slideEl){
    slideEl.innerText=slides[idx];
    setInterval(()=>{ idx=(idx+1)%slides.length; slideEl.innerText=slides[idx]; },3000);
  }

  // Demo login
  const loginBtn = document.getElementById('loginBtn');
  if(loginBtn){
    loginBtn.addEventListener('click',()=>{
      const phone = document.getElementById('phone').value || '9820399529';
      document.getElementById('accountData').innerHTML = `<div class="card-light"><p><strong>Customer:</strong> ${phone}</p><p><strong>Work Status:</strong> In Progress</p><p><strong>Pending:</strong> ₹500</p><p><strong>Total:</strong> ₹1500</p><p><strong>ETA:</strong> 2 days</p></div>`;
    });
  }

  // Reviews demo submission
  const reviewBtn = document.getElementById('submitReview');
  if(reviewBtn){
    reviewBtn.addEventListener('click',()=>{
      const name = document.getElementById('revName').value || 'Anonymous';
      const rating = document.getElementById('revRating').value || '5';
      const text = document.getElementById('revText').value || '';
      const list = document.getElementById('reviewList');
      const item = document.createElement('div');
      item.className='card-light';
      item.style.marginTop='10px';
      item.innerHTML = `<strong>${name}</strong> — ${'⭐'.repeat(parseInt(rating))}<p>${text}</p>`;
      list.prepend(item);
      alert('Thank you! Your review was submitted (demo).');
    });
  }

  // Quote form demo
  const quoteBtn = document.getElementById('quoteBtn');
  if(quoteBtn){
    quoteBtn.addEventListener('click',()=>{
      const svc = document.getElementById('quoteService').value;
      const dt = document.getElementById('quoteDate').value;
      alert('Quote request sent for ' + svc + ' on ' + dt + ' (demo). We will contact you on WhatsApp 9820399529.');
    });
  }
});
