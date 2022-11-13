type locationCoordinates = {
  lat: number;
  long: number;
};
export type job = {
  address: string;
  benefits: string[];
  createdAt: string;
  updatesAt: string;
  description: string;
  email: string;
  employment_type: string[];
  id: string;
  location: locationCoordinates;
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
};
