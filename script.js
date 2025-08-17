function spinchip() {
  const chipNameEl = document.getElementById('chipName');
  const againBtn = document.getElementById('againBtn');
  let spinInterval;

  // Disable both buttons while spinning
  document.getElementById('generateBtn').disabled = true;
  againBtn.disabled = true;

  // Add spinning animation
  chipNameEl.classList.add("spin");

  // Start fast random spin
  spinInterval = setInterval(() => {
    const random = chip[Math.floor(Math.random() * chip.length)];
    chipNameEl.textContent = random;
  }, 100); // change every 100ms

  // Stop after 5 seconds
  setTimeout(() => {
    clearInterval(spinInterval);
    const finalchip = chip[Math.floor(Math.random() * chip.length)];
    chipNameEl.textContent = finalchip;  // ✅ fixed

    // Remove animation
    chipNameEl.classList.remove("spin");

    againBtn.style.display = 'inline-block';
    document.getElementById('generateBtn').disabled = false;
    againBtn.disabled = false;
  }, 5000); // 5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generateBtn').addEventListener('click', spinchip);
  document.getElementById('againBtn').addEventListener('click', spinchip);
});
