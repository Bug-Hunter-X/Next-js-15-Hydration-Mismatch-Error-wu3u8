# Next.js 15 Hydration Mismatch Bug Report

This repository demonstrates a common hydration mismatch error in Next.js 15.  The issue arises from inconsistencies between the server-side rendered HTML and the client-side rendered content. This example highlights the importance of ensuring that the client-side rendering matches the server-side rendering to avoid hydration mismatches.  The solution demonstrates how to resolve this by avoiding discrepancies between the server-side and client-side rendering.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Observe the hydration mismatch error in your browser's console.