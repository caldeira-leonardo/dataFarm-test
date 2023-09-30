import React, {useEffect} from 'react';
import SyncDataComponent from '../components/SyncDataComponent';
import {useUser} from '../../../Context/userContext';
import {syncRecordData} from '../../../Utils/SyncHistoryData';

const SyncData = () => {
  const {hasInternet, user} = useUser();

  useEffect(() => {
    if (hasInternet) {
      if (user?.token) {
        syncRecordData(user?.token);
      }
    }
  }, [hasInternet, user?.token]);

  return <SyncDataComponent {...{hasInternet}} />;
};

export default SyncData;
