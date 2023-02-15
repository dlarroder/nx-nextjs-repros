import { useRouter } from 'next/router';
import React from 'react';

export const decorators = [
  (Story: any, context) => {
    const router = useRouter();

    return (
      <div>
        <button onClick={() => router.push('/somewhere')}>click me</button>
        <Story />
      </div>
    );
  },
];
