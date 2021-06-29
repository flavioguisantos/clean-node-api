module.exports = {

  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

  // Automatically clear mock calls and instances between every test
  // clearMocks: true

  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: true,

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "v8",

}
