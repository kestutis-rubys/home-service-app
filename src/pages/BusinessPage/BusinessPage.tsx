import styles from './BusinessPage.module.css';

import { useLocation } from 'react-router-dom';

import React from 'react';

const BusinessPage: React.FC = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h1>Business Page</h1>
      <p>Welcome to the Business Page!</p>
    </div>
  );
};

export default BusinessPage;
