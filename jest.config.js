module.exports = {
    automock: false,
    collectCoverage: true,
    moduleFileExtensions: ['ts', 'js'],
    testPathIgnorePatterns: [
        "<rootDir>/dist",
        "<rootDir>/docs",
        "<rootDir>/node_modules"
    ]
};
