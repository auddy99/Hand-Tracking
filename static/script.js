var width = 320;    // We will scale the photo width to this
var height = 0;     // This will be computed based on the input stream

var streaming = false;

var video = null;
var canvas = null;
var photo = null;
var startbutton = null;
var b64Text = null;
var caption = null;

$(document).ready(function(){
  console.log("Document Ready");
  // initVideo();
});

function initVideo(){
  video = document.getElementById('video');
  canvas = document.getElementById('canvas');
  photo = document.getElementById('photo');
  startbutton = document.getElementById('startbutton');
  b64Text = document.getElementById('b64Text');
  caption = document.getElementById('caption');

  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(function(stream) {
      video.srcObject = stream;
      video.play();
  })
  .catch(function(err) {
      console.log("An error occurred: " + err);
  });

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);

      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  startbutton.addEventListener('click', function(ev){
    takepicture();
    ev.preventDefault();
  }, false);

  clearphoto();
}

function clearphoto() {
  var context = canvas.getContext('2d');
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  var data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
}

function takepicture() {
  var context = canvas.getContext('2d');
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    var data = canvas.toDataURL('image/png');
    console.log(data);
    b64Text.setAttribute('value', data);
    $("#submit").click();
  } else {
    clearphoto();
  }
}





//Ajax

$("#mainForm").on('submit', function(event){
  $.ajax({
    url: "/show",
    type: "post",
    data: {
      // These are params sent to show route
      b64: $("#b64Text").val()
    }
  })
  .done(function(data){
    console.log(data.verdict);
    photo.setAttribute('src', data.imgURL);
  })
  event.preventDefault();
});



