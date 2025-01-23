```javascript
// pages/about.js

export default function About() {
  // Solution: Use getStaticProps or getServerSideProps to ensure
  // consistent rendering across the client and server.
  // Or, remove the dynamic content that creates the mismatch.

  // This version will now match client and server rendering
  return (
    <div>
      <p>Hello from About Page</p>
    </div>
  );
}
```