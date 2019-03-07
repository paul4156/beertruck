export default class ClimateChanger {
  /**
   * Construct a climate changer instance which will change temperature of each container and monitors beers
   *
   * @param {array} options
   */
  constructor(options) {
    this.lower = options.lower ? options.lower : 0;
    this.upper = options.upper ? options.upper : 1;
    this.range = this.upper - this.lower;
    this.containers = options.containers;
  }

  /**
   * Get a random number within [this.lower, this.upper)
   *
   * @returns {number}
   */
  getChange() {
    return Math.random() * this.range + this.lower;
  }

  /**
   * Change all containers' temperatures
   */
  change() {
    this.containers.forEach(container => container.heat(this.getChange()));
  }

  /**
   * Monitors all containers. If safe, just report temperature.
   * If not safe, list all beers in the container that is in danger,
   * ie, the temperature is above allowance.
   * Then recommend an action.
   *
   * Safe example:
   *   Container 2: -0.94 degrees
   *
   * Alert example:
   *   Container 2: 5.18 degrees, 5 (Wheat beer) in danger! Reduce temperature to -3
   *     degrees immediately
   */
  monitorContainers() {
    this.containers.forEach((container) => {
      const containerInfo = `Container ${container.number}: ${container.temperature.toFixed(2)} degrees`;
      if (container.isSafe()) {
        console.log(`${containerInfo}`);
        return;
      }
      const beers = container.getBeersInDanger();
      const beerInfo = beers
        .map(beer => `${beer.number} (${beer.name})`)
        .join(', ');
      console.error(
        '\x1b[41m%s\x1b[0m',
        `${containerInfo}, ${beerInfo} in danger! Reduce temperature to ${container.getInitTemperature()} degrees immediately`,
      );
    });
  }
}
