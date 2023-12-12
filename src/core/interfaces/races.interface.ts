import { DriverModel } from './drivers.interface';

export interface RacesModel {
  season: string,
  round: string,
  url: string,
  raceName: string,
  Circuit: {
    circuitId: string,
    url: string,
    circuitName: string,
    Location: {
      lat: string,
      long: string,
      locality: string,
      country: string
    }
  },
  date: string,
  time: string,
  Results: [
    {
      number: string,
      position: string,
      positionText: string,
      points: string,
      Driver: DriverModel,
      Constructor: {
        constructorId: string,
        url: string,
        name: string,
        nationality: string
      },
      grid: string,
      laps: string,
      status: string,
      Time: {
        millis: string,
        time: string
      },
      FastestLap: {
        rank: string,
        lap: string,
        Time: {
          time: string,
        },
        AverageSpeed: {
          units: string,
          speed: string,
        }
      }
    },
  ]
}
