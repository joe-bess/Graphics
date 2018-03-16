var song;
var fft;
var button;
var volHistory = [];
var w;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('ELY - Smoking Alone v7.wav');
}

function setup() {
  createCanvas(1024, 512);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.8, 64);
  w = width / 64
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  // noStroke();
  // translate(width / 2, height / 4);
  beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w - 1, height - y);
  }
  endShape();
}
