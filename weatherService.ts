import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  latitude: number;  // Represents the latitude of the coordinates
  longitude: number; // Represents the longitude of the coordinates
}

// Example of using the Coordinates interface
const location: Coordinates = {
  latitude: 37.7749,
  longitude: -122.4194
};

// TODO: Define a class for the Weather object
class Weather {
  temperature: number; // Temperature in degrees Celsius
  humidity: number;    // Humidity percentage
  description: string; // Weather description (e.g., "Sunny", "Rainy")
  windSpeed: number;   // Wind speed in meters per second

  constructor(
      temperature: number,
      humidity: number,
      description: string,
      windSpeed: number
  ) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.description = description;
      this.windSpeed = windSpeed;
  }

  // Method to display weather information
  displayWeather(): string {
      return `Weather: ${this.description}, Temperature: ${this.temperature}°C, Humidity: ${this.humidity}%, Wind Speed: ${this.windSpeed} m/s`;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  constructor(baseURL: string, apiKey: string, cityName: string) {
    
}
  // TODO: Create fetchLocationData method
  
  // Define a method inside the class
    greet(name: string): string {
        return `Weather, ${name}!`;
    }
}

function greet(name: string): string {
  return `, ${name}!`;
}
   
  // private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  interface LocationData {
    city: string;
    state: string;
    country: string;
    zipCode: string;
}
  
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  
  interface WeatherQueryParams {
    lat: number; // Latitude
    lon: number; // Longitude
    apiKey: string; // API key for authentication
    [key: string]: any; // Allow additional parameters
}
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  interface LocationData {
    city: string;
    state: string;
    country: string;
}
// private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  
 

    



  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  interface ParsedWeather {
    city: string;
    temperature: number;
    pressure: number;
    humidity: number;
    description: string;
    icon: string;

    
}

weather: Array<{
  description: string;
  icon: string;
}>;


  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  interface ForecastData {
    dt: number; // Timestamp
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
}

    
       
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  

  
  // async getWeatherForCity(city: string) {}
