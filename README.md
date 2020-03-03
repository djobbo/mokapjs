# MokapJS

## Introduction

### About Mokap.js

Mokap is a data modeling utility used to build fast and easy json mock-ups.

### Getting started

#### Installation

with npm

```bat
$ npm install --save mokapjs
```

with yarn

```bat
$ yarn add mokapjs
```

#### Add mokap to your application

Import only what you need

```js
const { arr, bool, str } = require('mokapjs');
```

Or import everything into a namespace (here, `mokapjs`)

```js
const mokap = require('mokapjs');
```

#### First steps

Modeling data with mokap is

## Generators

A generator is a function which, when called, will return a mock-up value of a predefined type.

Example

```js
const { str } = require('mokapjs');

// Creating a generator
const hello = str('world');

console.log(hello); // output: [Function]

console.log(hello()); // output: world
```

### Basic Generators

#### Boolean

```js
const { bool } = require('mokapjs');
```

Creating a Boolean Generator

```js
const boolGenerator = bool();

console.log(boolGenerator()); // output: true | false
```

#### String

```js
const { str } = require('mokapjs');
```

Creating a String Generator

```js
const strGenerator = str('text');

console.log(strGenerator());
// output: text
```

This is great, but there are more interesting ways to mock-up string values.

1. Random generation with **fixed-length**

```js
// Generator will output a random string of length 12 when called.
const strGenerator = str({ length: 12 });

console.log(strGenerator());
// output: Ze1DJsi86asP | 6l237qUKx5ze etc...
```

1. Random string generation with **variable-length**

```js
// Generator will output a random string of length 3 to 10 when called.
const strGenerator2 = str({ length: { min: 3, max: 10 } });

console.log(strGenerator());
// output: Ze1DJs | 6l237qUKx etc...
```

2. Random string generation with fixed or variable length & **filter**

```js
console.log(str({ length: 12, filter: /[A-Z]/ })());
// output: SHJDIZOLJDSK | NCKEUVGQOEDX etc...

console.log(str({ length: { min: 3, max: 10 }, filter: /[a-z0-9]/ })());
// output: q25d | 4g25e8dsz etc...
```

3. Random string generation using a **Regular Expression**

```js
const strGenerator = str(/[a-z]{3, 6}@(gmail|outlook).com/);

console.log(strGenerator());
// output: fmox@outlook.com | rxb@gmail.com | pnyae@gmail.com etc...
```

4. Random string element from an array

```js
const strGenerator = str(['hello', 'hi', 'world']);

console.log(strGenerator());
// output: hello | world | hi
```

#### Number

#### Date

### Recursive Generators

> A recursive type is a data type that can contain other generators.

#### Map

> A map corresponds to a javascript object.

```js
const { map } = require('mokapjs');
```

Creating a Map Generator

```js
const mapGenerator = map({
    field1: value1,
    field2: value2,
    ...,
    fieldN: valueN
})
```

Field values can either be a fixed value or a generator of any kind.

Example

```js
const mapGenerator = map({
    field1: value1,
    field2: value2,
    ...,
    fieldN: valueN
})
```

#### Array
