import React, {useState, useCallback, useEffect} from 'react';
import StopRecordComponent from '../components/StopRecordComponent';
import {getResources} from '../../../Services/Resources';
import {useUser} from '../../../Context/userContext';
import {
  FarmsProps,
  MachineriesProps,
  ReasonsProps,
} from '../Types/StopRecordTypes';

const StopRecord = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [machineries, setMachineries] = useState<MachineriesProps[]>([]);
  const [farms, setFarms] = useState<FarmsProps[]>([]);
  const [reasons, setReasons] = useState<ReasonsProps[]>([]);
  const {user} = useUser();

  const fetchResourcesData = useCallback(async () => {
    try {
      setIsLoading(true);
      if (user?.token) {
        const {data} = await getResources(user?.token);
        setMachineries(data.resources.machineries);
        setFarms(data.resources.farms);
        setReasons(data.resources.reasons);
      }
    } catch (e) {
      console.log('error updating', e);
    } finally {
      setIsLoading(false);
    }
  }, [user?.token]);

  useEffect(() => {
    fetchResourcesData();
  }, [fetchResourcesData]);
  return <StopRecordComponent {...{isLoading, machineries, farms, reasons}} />;
};

export default StopRecord;
