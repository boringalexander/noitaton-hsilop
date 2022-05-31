'use strict';

module.exports = {
    rootDir: '../',
    collectCoverageFrom: [
        'lib/*.{js}'
    ],
    coverageThreshold: {
        global: {
            statements: 100,
            lines: 100
        }
    }
,
    testEnvironment: 'node',
    testMatch: [
        '<rootDir>/test/**/?(*.)(spec|test).js'
    ]
};