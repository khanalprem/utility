'use strict';

function Slider(slider) {
  this.slider = slider;
  slider.addEventListener(
    'input',
    function () {
      this.updateSliderOutput();
      this.updateSliderLevel();
      this.updateBars();
    }.bind(this),
    false
  );

  this.level = function () {
    // actual slider
    let level = this.slider.querySelector('.slider-input');
    return level.value;
  };

  this.levelString = function () {
    return parseInt(this.level());
  };

  this.updateSliderOutput = function () {
    // number indicator below slider
    let output = this.slider.querySelector('.slider-output');
    // slider circle handle
    let thumb = this.slider.querySelector('.slider-thumb');
    output.value = this.levelString();
    output.style.left = this.levelString() + '%';
    thumb.style.left = this.levelString() + '%';
  };

  this.updateSliderLevel = function () {
    // dark gray part of slider
    let level = this.slider.querySelector('.slider-level');
    level.style.width = this.levelString() + '%';
  };
}

let volumeSlider = document.getElementById('volume');
new Slider(volumeSlider);
