const mock = require('./main');

console.log(mock({
    type: Array,
    length: 3,
    value: [{
        type: Array,
        length: 3,
        value: {
            type: String,
            value: ['ABC', 'DEF', 'AZERTY', 'QWERTY']
        }
    }, {type: Number, value: [1, 4, 8]}]
}))