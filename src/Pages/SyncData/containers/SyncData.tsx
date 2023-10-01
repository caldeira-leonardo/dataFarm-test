import React from 'react';
import SyncDataComponent from '../components/SyncDataComponent';
import {useUser} from '../../../Context/userContext';
import {syncRecordData} from '../../../Utils/SyncHistoryData';

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
