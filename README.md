# use-helpers

Small, focused React hooks for everyday state patterns.

Usage:

```ts
import { useDelayedEffect, useValue } from "@lebedevna/use-helpers";

const [value, setValue] = useValue(initialValue, [id]);

useDelayedEffect(() => {
  save(value);
}, 500, [value]);
```

Hooks:

- `useValue(initialValue, deps)`: like `useState`, but re-initializes when `deps` change.
- `useDelayedEffect(effect, delay, deps)`: runs an effect after `delay` milliseconds;
  pending effects are cancelled when `deps` change or the component unmounts.
