// Start button: hide landing, show AR scene
document.getElementById('startBtn').addEventListener('click', function () {
  const landing = document.getElementById('landing');
  const scene = document.querySelector('a-scene');

  landing.style.display = 'none';
  scene.style.display = 'block';

  // the AR.js scene will request webcam permission automatically
});
