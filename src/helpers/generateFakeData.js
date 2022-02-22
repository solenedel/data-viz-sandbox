import faker from "@faker-js/faker";

// TO TO: add TypeScript later
// TO DO: add unit tests (mocha & chai)

// this function generates random data (of number data type) using a stable fork of the faker.js package.
// it can be used for either axes (X or Y)
export const generateFakeData = (numOfPoints, min, max) => {
  const dataPoints = [];

  for (let i = 0; i < numOfPoints; i += 1) {
    dataPoints.push(faker.datatype.number({ min, max }));
  }

  return dataPoints;
};
