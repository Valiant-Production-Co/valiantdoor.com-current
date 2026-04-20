import { notFound } from 'next/navigation';

export default function DynamicPage({ params }) {
  // All specific pages are handled by their own route files
  // This is a fallback for unmapped routes
  notFound();
}
