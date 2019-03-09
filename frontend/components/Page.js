import React, { Component } from 'react';
import Navigation from './Navigation';
import Meta from './Meta';

const Page = ({ children }) => (
  <div>
    <Meta />
    <Navigation />
    {children}
  </div>
);

export default Page;
