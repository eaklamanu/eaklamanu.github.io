const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};

module.exports = config;
