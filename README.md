# import-sort-style-choffmeister

My sorting style for [import-sort](https://github.com/renke/import-sort).

## How does the sorting look like?

```js
// modules with side effects first and in original order
import 'zzz'
import 'aaa'

// absolute modules
import { Bar1, Foo1 } from 'aaa'
import Pie1 from 'bbb'
import * as zooms1 from 'ccc'

// relative modules
import { Bar2, Foo2 } from '../bbb'
import Pie2 from '../ccc'
import * as zooms2 from './aaa'

// style modules
import styles from './styles.css'
```

## Usage

First install the needed dependencies by running:

```bash
npm install --save-dev import-sort-cli import-sort-parser-babylon import-sort-style-choffmeister
```

Then change your `package.json` like this:

```json
{
  "name": "my-project",
  "importSort": {
    ".js": {
      "parser": "babylon",
      "style": "choffmeister"
    }
  }
}
```

Now you can sort your imports by running:

```
./node_modules/.bin/import-sort -o src/
```
