import React from 'react';
import SyncDataComponent from '../components/SyncDataComponent';
import {useUser} from '@src/Context/userContext';
import {syncRecordData} from '@src/Utils/SyncHistoryData';

const SyncData = () => {
  const {hasInternet, user} = useUser();

  async function syncData() {
    if (user?.token) {
      await syncRecordData(user?.token);
    }
  }

  return <SyncDataComponent {...{hasInternet, syncData}} />;
};

export default SyncData;
