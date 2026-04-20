'use client';

import { useState, useEffect } from 'react';

export default function BuilderContent({ content }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    if (content && content.html) {
      setHtml(content.html);
    }
  }, [content]);

  if (!html) {
    return <div>Loading...</div>;
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="builder-content"
    />
  );
}
