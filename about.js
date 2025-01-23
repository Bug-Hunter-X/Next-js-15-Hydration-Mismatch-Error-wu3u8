```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error
  // if the initial HTML differs from the rendered HTML
  const message = 'Hello from About Page';
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
```