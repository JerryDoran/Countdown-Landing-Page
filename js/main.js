/* jshint esversion: 6 */

const countdown = document.querySelector('.countdown');
const launchDate = new Date('Jun 8, 2019 06:00:00').getTime();

// Update every second
const interval = setInterval(() => {
  // Get today's date and time in miliseconds
  const now = new Date().getTime();

  // Get distance from now to the launch date
  const distance = launchDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${secs}<span>Seconds</span></div>
  `;

  // If launch date passed
  if(distance < 0) {
    clearInterval(interval);
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
