# use-helpers

Small, focused React hooks for everyday state patterns.

Usage:

```ts
import { useValue } from "@y87cgp/use-helpers";

const [value, setValue] = useValue(initialValue, [id]);
```

Hooks:

- `useValue(initialValue, deps)`: like `useState`, but re-initializes when `deps` change.
