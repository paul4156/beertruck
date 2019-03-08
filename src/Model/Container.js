export default class Container {
  /**
   * Create a container
   *
   * @param {object} options
   */
  constructor(options) {
    this.number = options.number;
    this.beers = options.beers;
    this.temperature = this.getInitTemperature();
    this.upperTemperature = this.getHighestPossibleTemperature();
  }

  /**
   * Get the lowest temperature allowed for all beers
   *
   * @return {number}
   */
  getInitTemperature() {
    return Math.max(...this.beers.map(beer => beer.lower));
  }

  /**
   * Get the highest possible temperature allowed for all beers
   *
   * @returns {number}
   */
  getHighestPossibleTemperature() {
    return Math.min(...this.beers.map(beer => beer.upper));
  }

  /**
   * Is current temperature safe?
   *
   * @return {boolean}
   */
  isSafe() {
    return this.temperature <= this.upperTemperature;
  }

  /**
   * Get an array of beers in danger
   *
   * @returns {*}
   */
  getBeersInDanger() {
    if (this.isSafe()) {
      return [];
    }

    const { beers, temperature } = this;
    return beers.filter(beer => !beer.isSafe(temperature));
  }

  /**
   * Heat the container up
   *
   * @param {number} delta
   */
  heat(delta) {
    this.temperature += delta;
  }
}
