/* eslint-disable */
// @ts-nocheck

import React from 'react';

export const MarkdownComponents = {
  img: ({ node, ...props }) => <img className="mx-auto my-0 mb-7 w-[100%] md:w-[80%]" alt={props.alt} {...props} />,
  h2: ({ node, ...props }) => <h2 className="mb-1 text-xl font-bold" {...props} />,
  p: ({ node, ...props }) => <p className="mb-5" {...props} />,
  pre: ({ node, ...props }) => (
    <pre className="mb-4 overflow-auto rounded-lg bg-foreground/5 px-4 py-4 font-serif text-sm" {...props} />
  ),
};
