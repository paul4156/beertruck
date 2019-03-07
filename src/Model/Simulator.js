import Beers from '../Constance/Beers';
import Container from './Container';
import ClimateChanger from './ClimateChanger';

export default class Simulator {
  /**
   * Create a simulator to simulate the temperature changes in all containers
   *
   * @param {object} options
   */
  constructor(options) {
    const self = this;
    this.configs = options.configs;
    this.configure();
    this.climateChanger = new ClimateChanger({
      containers: self.containers,
    });
    this.climateChanger.monitorContainers();
  }

  /**
   * A tick function that triggers the temperature change
   */
  tick() {
    this.climateChanger.change();
    this.climateChanger.monitorContainers();
  }

  /**
   * Create containers from input configs
   */
  configure() {
    let index = 0;
    this.containers = this.configs.map((config) => {
      index += 1;
      return Simulator.configureOneContainer(config, index);
    });
  }

  /**
   * Create a single container filled with created beers from config
   *
   * @param {array} config
   * @param {number} index
   *
   * @returns {Container}
   */
  static configureOneContainer(config, index) {
    const beers = config.map(n => Simulator.getBeer(n));
    return new Container({
      beers,
      number: index,
    });
  }

  /**
   * Get a Beer object based on the index n
   *
   * @param {number} index
   *
   * @returns {Beer}
   */
  static getBeer(index) {
    return Beers[index - 1];
  }
}
