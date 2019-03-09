import React, { Component } from 'react';

const Page = ({ children }) => (
  <div>
    <p>Hey, I'm the page component</p>
    {children}
  </div>
);

export default Page;
