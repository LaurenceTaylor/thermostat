'use strict';

function Thermostat() {
  this._temperature = 20;
  this._min = 10;
  this._max = 25;
};

Thermostat.prototype.up = function() {
  if(this._temperature === this._max) {throw new Error("Max temperature reached")}
  this._temperature++;
};

Thermostat.prototype.down = function() {
  if(this._temperature === this._min) {throw new Error("Min temperature reached")}
  this._temperature--;
};

Thermostat.prototype.powerSaveToggle = function() {
  this._max === 25 ? this._max = 32 : this._max = 25;
}

Thermostat.prototype.reset = function() {
  this._temperature = 20;
}

Thermostat.prototype.usage = function() {
  if(this._temperature < 18) {return "Low"}
  if(this._temperature < 25) {return "Med"}
  if(this._temperature > 24) {return "High"}
}
