// Lightweight interactions: mobile menu + theme toggle (optional)
const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', () => {
alert('Navigation: use the header links on larger screens. This demo is minimal.');
});


// Optional: save contact form data to localStorage (no backend)
const form = document.querySelector('form');
if (form) {
form.addEventListener('submit', () => {
const data = {
name: form.name?.value || '',
email: form.email?.value || '',
message: form.message?.value || ''
};
try { localStorage.setItem('lastContact', JSON.stringify(data)); } catch(e){}
});
}