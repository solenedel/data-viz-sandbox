import faker from "@faker-js/faker";

// add TypeScript later
export const generateFakeData = (numOfPoints, min, max) => {
  const dataPoints = [];

  for (let i = 0; i < numOfPoints; i += 1) {
    dataPoints.push(faker.datatype.number({ min, max }));
  }

  return dataPoints;
};
