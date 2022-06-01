'use strict';

const { faker } = require('@faker-js/faker');

const binopInput = () => [faker.datatype.number(), faker.datatype.number()];

module.exports = { binopInput };