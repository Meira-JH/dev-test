// jest.config.js
//Sync object
module.exports = {
  verbose: true,
};

//Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};

const { defaults } = require("jest-config");
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  // ...
};
