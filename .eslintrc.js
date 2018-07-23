module.exports = {
    "extends": "airbnb-base",
    "env": {
        "node": true,
        "es6": true
    },
    "rules": {
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
        "space-before-function-paren": ["error", "never"],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "nonblock-statement-body-position": ["error", "below"],
    }
};
