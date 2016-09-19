function Person(attr) {
  this.weight = attr.weight;
  this.weight_imperial = attr.weight_imperial;
  this.height = attr.height;
  this.height_inches = attr.height_inches;
  this.height_feet = attr.height_feet;
  this.system = attr.system;
}

Person.prototype.calculate_metric = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

Person.prototype.calculate_imperial = function() {
  calculator = new BMICalculator();
  calculator.imperial_bmi(this);
};
