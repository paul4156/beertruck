export default class Beer {
  /**
   * Create a beer
   *
   * @param {object} options
   */
  constructor(options = {}) {
    this.name = options.name;
    this.lower = options.lower;
    this.upper = options.upper;
    this.number = options.number;
  }

  /**
   * Check if the beer is safe under a given temperature
   *
   * @param {number} temperature
   *
   * @returns {boolean}
   */
  isSafe(temperature) {
    return temperature >= this.lower && temperature <= this.upper;
  }
}
