import Configs from './Constance/Configs';
import Simulator from './Model/Simulator';

const simulator = new Simulator({
  configs: Configs,
});

setInterval(simulator.tick.bind(simulator), 1000);
