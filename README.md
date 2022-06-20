## Install

Using `npm`, `yarn` or `pnpm`

```shell
npm i sure-utils

# or

yarn add sure-utils

# or

pnpm i sure-utils
```

## Usage

- Demand import

```js
import { isNull, hasChanged } from 'sure-utils'

console.log(isNull(null)) // true
console.log(isNull(1)) // false

const data = { a: 1 }
const newData = data
newData.a = 'b'
console.log(hasChanged(newData, data)) // false
```

- Default import

```js 
import * as utils from 'sure-utils'

console.log(utils.isNull(null)) // true
console.log(utils.isNull(1)) // false
```

<!--
In Node.js

```js
// Load the full utils
const sureUtils = require('sure-utils')

// Load the array utils
const array = require('sure-utils/array')
```
-->