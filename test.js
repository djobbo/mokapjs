const mock = require('./main');

console.log(mock({
    type: Array,
    length: 8,
    value: {
        type: Array,
        length: 8,
        value: {
            type: Boolean
        }
    }
}))