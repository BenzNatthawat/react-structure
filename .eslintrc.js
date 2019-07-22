module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "globals": {
        "localStorage": true,
        "fetch": true
    },
    "plugins": [
        "react"
    ],
    "extends": ["standard", "standard-react"]
};