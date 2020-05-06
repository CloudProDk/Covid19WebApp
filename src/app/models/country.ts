export class Country {
  data: [
    {
      coordinates: {
        latitude: number;
        longitude: number;
      };
      number: String;
      code: String;
      population: String;
      updated_at: String;
      today: {
        deaths: number;
        confirmed: number;
      };
      latest_data: {
        deaths: number;
        confirmed: number;
        recovered: number;
        critical: number;
        calculated: {
          death_rate: number;
          recovery_rate: number;
          recovered_vs_death_ratio: number;
          cases_per_million_population: number;
        };
      };
      timeline: [
        {
          updated_at: String;
          date: String;
          deaths: number;
          confirmed: number;
          active: number;
          recovered: number;
          new_confirmed: number;
          new_recovered: number;
          new_deaths: number;
          is_in_progress: boolean;
        }
      ];
    }
  ];
}
