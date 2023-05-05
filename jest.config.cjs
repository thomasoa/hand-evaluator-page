/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    "verbose": true,
    "maxWorkers": 1, /* hack for bigint tests? */
    "coveragePathIgnorePatterns": [
        "index.js"
    ]
};
