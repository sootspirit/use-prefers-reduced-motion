# @sootspirit/use-prefers-reduced-motion

A React hook that detects whether the user has enabled reduced motion preferences in their operating system. Built with `useSyncExternalStore` for full SSR compatibility.

## Installation

```bash
npm install @sootspirit/use-prefers-reduced-motion
```

## What is this?

`usePrefersReducedMotion` is a React hook that subscribes to the CSS `prefers-reduced-motion` media query. This media query reflects the user's operating system setting for reducing motion:

- **macOS**: System Settings → Accessibility → Display → Reduce motion
- **Windows**: Settings → Accessibility → Motion → Reduce motion
- **iOS**: Settings → Accessibility → Motion → Reduce motion
- **Android**: Settings → Accessibility → Remove animations

When users enable this setting, they typically want to minimize or eliminate animations — both for comfort and accessibility.

## Usage

```tsx
import { usePrefersReducedMotion } from '@sootspirit/use-prefers-reduced-motion';

function MyComponent() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={prefersReducedMotion ? 'static' : 'animated'}>
      {prefersReducedMotion ? 'Motion reduced - showing static content' : 'Full motion - animating content'}
    </div>
  );
}
```

### With CSS animations

```tsx
function AnimatedCard() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="card"
      style={{
        animation: reducedMotion ? 'none' : 'fadeIn 0.5s ease-in',
      }}
    >
      Content here
    </div>
  );
}
```

### With CSS transitions

```tsx
function ToggleButton({ isOpen }: { isOpen: boolean }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <button
      style={{
        transition: reducedMotion ? 'none' : 'transform 0.3s ease',
      }}
    >
      Click me
    </button>
  );
}
```

## API

### `usePrefersReducedMotion(): boolean`

Returns `true` if the user prefers reduced motion, `false` otherwise.

| Return value | Meaning                                        |
| ------------ | ---------------------------------------------- |
| `true`       | User has enabled reduced motion in OS settings |
| `false`      | User has normal motion preferences (default)   |

## Features

- **SSR Compatible** — Uses `useSyncExternalStore` to work correctly with server-side rendering
- **Reactive** — Automatically updates when the user changes their OS preference
- **No dependencies** — Lightweight with zero external dependencies (besides React)
- **TypeScript** — Full type definitions included

## Requirements

- React 19.x
- React DOM 19.x

## License

MIT
