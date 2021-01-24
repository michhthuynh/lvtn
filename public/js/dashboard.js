var socket = io.connect('/');

function updateProgress() {
  const line = document.getElementById('line-progress');
  const carIcon = document.getElementById('car-icon');

  document.getElementById('progress').innerHTML = `${Math.round(progress * 100) / 100} %`;
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

function updateDirect(forward) {
  const progressBar = document.getElementById('progress-bar-car')
  progressBar.style.opacity = 0
  if (forward) {
    document.getElementById('anchor-a').innerHTML = "A"
    document.getElementById('anchor-b').innerHTML = "B"
    document.getElementById('anchor-c').innerHTML = "C"
    document.getElementById('anchor-d').innerHTML = "D"
  } else {
    document.getElementById('anchor-a').innerHTML = "D"
    document.getElementById('anchor-b').innerHTML = "C"
    document.getElementById('anchor-c').innerHTML = "B"
    document.getElementById('anchor-d').innerHTML = "A"
  }

  setTimeout(() => {
    progressBar.style.opacity = 100
  }, 100)

}

function onClickGoBack() {
  goForward = !goForward
  progress = 100 - progress
  updateDirect(goForward)
  updateProgress()
  socket.emit('control', 'turning');
}

function onClickStart() {
  socket.emit('control', 'Start');
}

function onClickStop() {
  socket.emit('control', 'Stop');
}

function initialRun() {
  updateProgress()
}

initialRun()

