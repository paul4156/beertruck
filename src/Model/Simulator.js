import Beers from '../Constance/Beers';
import Container from './Container';
import ClimateChanger from './ClimateChanger';

export default class Simulator {
  constructor(options) {
    const self = this;
    this.configs = options.configs;
    this.configure();
    this.climateChanger = new ClimateChanger({
      containers: self.containers,
    });
    this.climateChanger.monitorContainers();
  }

  tick1() {
    this.climateChanger.change();
    this.climateChanger.monitorContainers();
  }

  configure() {
    let index = 0;
    this.containers = this.configs.map((config) => {
      index += 1;
      return Simulator.configureOneContainer(config, index);
    });
  }

  static configureOneContainer(config, index) {
    const beers = config.map(n => Simulator.getBeer(n));
    return new Container({
      beers,
      number: index,
    });
  }

  static getBeer(n) {
    return Beers[n - 1];
  }
}
