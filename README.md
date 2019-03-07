# beertruck
This is a fun js demo project

## Setup

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

or follow https://github.com/creationix/nvm#install--update-script.

Then install node 11:

```
nvm install 11
```

```
npm install
```

## Run
* Run app:
```
npm start
```

* Test: TODO
```
npm test
```

## Config
Constance/Configs has the initial configs for the containers, including the number of containers, what beers in each container.

Example
```
const Configs = [
  [1, 2, 3], // First container has beer 1, 2, and 3
  [4, 5, 6], // Second container has beer 4, 5, and 6
];
```

This can be customised as desired.

Constance/Beers contains all types of beers and their required temperatures. Currently, it contains the initial 6 beers. But one can change.

## Assumptions
* Temperature will only increase unless human intervention.
* Each container will start from the lowest temperature allowed to increase safety.

## TODO
* Testing

## Roadmap
* 1.0 Web version
* 2.0 Automatically optimise beer arrangement in containers
