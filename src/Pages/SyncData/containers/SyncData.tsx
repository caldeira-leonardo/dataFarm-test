import React from 'react';
import SyncDataComponent from '../components/SyncDataComponent';
import {useUser} from '@src/Context/userContext';

const SyncData = () => {
  const {hasInternet} = useUser();

  return <SyncDataComponent {...{hasInternet}} />;
};

export default SyncData;
