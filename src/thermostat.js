function Thermostat() {
  this._temperature = 20;
  this._min = 10;
  this._max = 25;
  this._powerSavingMode = true;
};

Thermostat.prototype.up = function() {
  if(this._temperature === this._max) {throw new Error("Max temperature reached")}
  this._temperature++;
};

Thermostat.prototype.down = function() {
  if(this._temperature === this._min) {throw new Error("Min temperature reached")}
  this._temperature--;
};

Thermostat.prototype.toggle = function() {
  this._powerSavingMode = !this._powerSavingMode;
  this._powerSavingMode === true ? this._max = 25 : this._max = 32;
}

Thermostat.prototype.reset = function() {
  this._temperature = 20
}

Thermostat.prototype.usage = function() {
  if(this._temperature < 18) {return "Low"}
  if(this._temperature < 25) {return "Med"}
  if(this._temperature > 24) {return "High"}
}
