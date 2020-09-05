module.exports = {
    setupTestFrameworkScriptFile: '<rootDir>test/setup.js',
    collectCoverage: true,
    coverageDirectory: 'coverage/',
    coverageReporters: ['lcov', 'text'],
    collectCoverageFrom: ['src/**/*.(js|jsx)'],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 50,
            lines: 50,
            statements: -10,
        },
    },
    testMatch: ['<rootDir>/test/*test.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    verbose: true,
    transformIgnorePatterns: ['/node_modules/(?!roi-.*)'],
    moduleNameMapper: {
        '.svg': '<rootDir>/test/__mocks__/fileMock.js',
    },
};