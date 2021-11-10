export interface DailyData {
  startTime: string;
  temperature: number;
  temperatureApparent: number;
  temperatureMin: number;
  temperatureMax: number;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  pressureSeaLevel: number;
  uvIndex: number;
  weatherCode: number;
  precipitationProbability: number;
  precipitationType: number;
  sunriseTime: string;
  sunsetTime: string;
  visibility: number;
  moonPhase: number;
  cloudCover: number;

  date: string;
  statusImage: string;
  statusString: string;
}

export interface HourlyData {
  startTime: string;
  temperature: number;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  pressureSeaLevel: number;
}

export interface FavState {
  lat: string;
  lng: string;
  city: string;
  state: string;
  id: string;
  timeAdded: number;
  locationString: string;
}

export interface SearchForm {
  street: string;
  city: string;
  state: string;
  autoDetect: boolean;
  fullAddress: string;
}

export const EmptyStar = { class: "color-unchecked", name: "star" };
export const FilledStar = { class: "color-checked", name: "starFill" };
export const FilledTrash = { class: "color-unchecked", name: "trashFill" };

export const AllStates = [
  { value :"Alabama", display:"Alabama" },
  { value :"Alaska", display:"Alaska" },
  { value :"American Samoa", display:"American Samoa" },
  { value :"Arizona", display:"Arizona" },
  { value :"Arkansas", display:"Arkansas" },
  { value :"California", display:"California" },
  { value :"Colorado", display:"Colorado" },
  { value :"Connecticut", display:"Connecticut" },
  { value :"Delaware", display:"Delaware" },
  { value :"District Of Columbia", display:"District Of Columbia" },
  { value :"Federated States Of Micronesia", display:"Federated States Of Micronesia" },
  { value :"Florida", display:"Florida" },
  { value :"Georgia", display:"Georgia" },
  { value :"Guam", display:"Guam" },
  { value :"Hawaii", display:"Hawaii" },
  { value :"Idaho", display:"Idaho" },
  { value :"Illinois", display:"Illinois" },
  { value :"Indiana", display:"Indiana" },
  { value :"Iowa", display:"Iowa" },
  { value :"Kansas", display:"Kansas" },
  { value :"Kentucky", display:"Kentucky" },
  { value :"Louisiana", display:"Louisiana" },
  { value :"Maine", display:"Maine" },
  { value :"Marshall Islands", display:"Marshall Islands" },
  { value :"Maryland", display:"Maryland" },
  { value :"Massachusetts", display:"Massachusetts" },
  { value :"Michigan", display:"Michigan" },
  { value :"Minnesota", display:"Minnesota" },
  { value :"Mississippi", display:"Mississippi" },
  { value :"Missouri", display:"Missouri" },
  { value :"Montana", display:"Montana" },
  { value :"Nebraska", display:"Nebraska" },
  { value :"Nevada", display:"Nevada" },
  { value :"New Hampshire", display:"New Hampshire" },
  { value :"New Jersey", display:"New Jersey" },
  { value :"New Mexico", display:"New Mexico" },
  { value :"New York", display:"New York" },
  { value :"North Carolina", display:"North Carolina" },
  { value :"North Dakota", display:"North Dakota" },
  { value :"Northern Mariana Islands", display:"Northern Mariana Islands" },
  { value :"Ohio", display:"Ohio" },
  { value :"Oklahoma", display:"Oklahoma" },
  { value :"Oregon", display:"Oregon" },
  { value :"Palau", display:"Palau" },
  { value :"Pennsylvania", display:"Pennsylvania" },
  { value :"Puerto Rico", display:"Puerto Rico" },
  { value :"Rhode Island", display:"Rhode Island" },
  { value :"South Carolina", display:"South Carolina" },
  { value :"South Dakota", display:"South Dakota" },
  { value :"Tennessee", display:"Tennessee" },
  { value :"Texas", display:"Texas" },
  { value :"Utah", display:"Utah" },
  { value :"Vermont", display:"Vermont" },
  { value :"Virgin Islands", display:"Virgin Islands" },
  { value :"Virginia", display:"Virginia" },
  { value :"Washington", display:"Washington" },
  { value :"West Virginia", display:"West Virginia" },
  { value :"Wisconsin", display:"Wisconsin" },
  { value :"Wyoming" ,display:"Wyoming" },
  {value :"select",display:"Select your state" }
];
