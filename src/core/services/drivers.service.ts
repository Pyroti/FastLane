import axiosConfig from '@core/config/axios.config';
import { DriverModel } from '@core/interfaces/drivers.interface';

export const getDriversList = async (): Promise<DriverModel[]> => {
  return axiosConfig.get<{ MRData: { DriverTable: { Drivers: DriverModel[] } } }>('/drivers.json')
    .then((response) => response.data.MRData.DriverTable.Drivers);
};

export const getDriverDetails = async (id: string): Promise<DriverModel> => {
  return axiosConfig.get<{ MRData: { DriverTable: { Drivers: DriverModel[] }}}>(`/drivers/${id}.json`).then((response) => response.data.MRData.DriverTable.Drivers[0]);
};
