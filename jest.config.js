module.exports = {
  automock: false,
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'js'],
  setupFiles: ['./setupJest.ts'],
  transform: {
    '\\.ts$': 'ts-jest'
  }
};
