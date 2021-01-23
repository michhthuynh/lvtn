function updateProgress() {
  const line = document.getElementById('line-progress');
  const carIcon = document.getElementById('car-icon');
  line.style.width = `calc(${progress}% - 50px)`;
  carIcon.style.left = `calc(${progress}% - 50px)`;
  if (progress >= 0) {
    document.getElementById('anchor-a').classList.add('active')
  }

  if (progress >= 100 / 3) {
    document.getElementById('anchor-b').classList.add('active')
  }

  if (progress >= 200 / 3) {
    document.getElementById('anchor-c').classList.add('active')
  }

  if (progress >= 100) {
    document.getElementById('anchor-d').classList.add('active')
  }
}

updateProgress()