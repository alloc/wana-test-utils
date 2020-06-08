# @wana/test-utils

Testing helpers for `wana`

## Usage

Currently, the only export is the `setupEnv` function, which provides a more
foolproof way to inject the `act` function. When you call `setupEnv`, you're
not required to set the `batchedUpdates` global.

This example shows integration with the popular `@testing-library/react` package:

```jsx
import { setupEnv } from '@wana/test-utils'
import { act } from '@testing-library/react'

setupEnv({ act })
```

If using `jest`, you can call `setupEnv` from what's called a "setup file". Try
pasting this into your `jest.config.js` file.

```js
setupFiles: ['<rootDir>/jest/setup.ts'],
```

Then create the `jest/setup.ts` module, and paste the first example into it.
