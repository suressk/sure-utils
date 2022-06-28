## Install

Using `npm`, `yarn` or `pnpm`

```shell
npm i sure-utils
```

## Usage

### In `.ts` file (`ESM`)

```js
import { isNull, hasChanged } from 'sure-utils'
// import sureUtils from 'sure-utils'

console.log(isNull(null)) // true
console.log(isNull(1)) // false

const data = { a: 1 }
const newData = data
newData.a = 'b'
console.log(hasChanged(newData, data)) // false
```

### In `.js` file

**CommJS:** `sure-utils/lib/cjs/*`

```js
const { isNull, hasChanged } = require('sure-utils/lib/cjs')
// const sureUtils = require('sure-utils/lib/cjs')

console.log(isNull(null)) // true
console.log(isNull(1)) // false

const data = { a: 1 }
const newData = data
newData.a = 'b'
console.log(hasChanged(newData, data)) // false
```

**ES Module:** `sure-utils/lib/esm/*`

```js
import { isNull, hasChanged } from 'sure-utils/lib/esm'
// import sureUtils from 'sure-utils/lib/esm'

console.log(isNull(null)) // true
console.log(isNull(1)) // false

const data = { a: 1 }
const newData = data
newData.a = 'b'
console.log(hasChanged(newData, data)) // false
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
