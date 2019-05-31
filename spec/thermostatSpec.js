describe('Thermostat', function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat._temperature).toEqual(20);
  });

  describe("The 'up' method", function() {
    it("should increase the temperature by 1", function() {
      thermostat.up()
      expect(thermostat._temperature).toEqual(21);
    });

    it("should throw error when temperature reaches max temp", function() {
      while(thermostat._temperature < thermostat._max) {thermostat.up();}
      expect(function() {thermostat.up()}).toThrowError("Max temperature reached")
    });
  });

  describe("The 'down' method", function() {
    it("should decrease the temperature by 1", function() {
      thermostat.down()
      expect(thermostat._temperature).toEqual(19);
    });

    it("should throw error when temperature reaches minimum temp", function() {
      while(thermostat._temperature > thermostat._min) {thermostat.down();}
      expect(function() {thermostat.down()}).toThrowError("Min temperature reached")
    });
  });

  describe("The power saving mode 'toggle'", function() {
    it("max temperature should be 32 when toggle is off", function() {
      thermostat.toggle();
      expect(thermostat._max).toEqual(32);
    });

    it("max temperature should be 25 when 'toggle' is on", function() {
      expect(thermostat._max).toEqual(25);
    });
  });

  describe("The 'reset' method", function() {
    it("causes temperature to be reset to 20", function() {
      while(thermostat._temperature > thermostat._min) {thermostat.down();}
      thermostat.reset();
      expect(thermostat._temperature).toEqual(20)
    });
  });

  describe("The 'usage' method", function() {
    it("lets user know energy usage is low", function(){
      for(var i=0; i < 3; i++){
        thermostat.down()
      }
      expect(thermostat.usage()).toEqual("Low")
    });

    it("lets user know energy usage is medium", function(){
      expect(thermostat.usage()).toEqual("Med")
    });

    it("lets user know energy usage is high", function(){
      for(var i=0; i < 5; i++){
        thermostat.up()
      }
      expect(thermostat.usage()).toEqual("High")
    });
  });
});
