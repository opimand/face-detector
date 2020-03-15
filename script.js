const video = document.getElementById('video')
console.log(video)
function startVideo() {
  navigator.getUserMedia({video:{}},
    stream => video.srcObject = stream,
      error => console.error(error)
  )
}

startVideo()