import axiosConfig from '@core/config/axios.config';
import { RacesModel } from '@core/interfaces/races.interface';

export const getRaceList = async (driverId: string): Promise<RacesModel[]> => {
  return axiosConfig.get<{ MRData: { RaceTable: { Races: RacesModel[] } } }>(`drivers/${driverId}/results.json`)
    .then((response) => response.data.MRData.RaceTable.Races);
};
