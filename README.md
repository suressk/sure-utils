## Install

Using `npm`, `yarn` or `pnpm`

```shell
npm i sure-utils
```

## Usage

```js
import { hasChanged, isNull } from 'sure-utils'
// import * as sureUtils from 'sure-utils'

console.log(isNull(null)) // true
console.log(isNull(1)) // false

const data = { a: 1 }
const newData = data
newData.a = 'b'
console.log(hasChanged(newData, data)) // false
```
