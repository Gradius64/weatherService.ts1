

interface WeatherResponse {
    city: string;
    list: Array<{
        dt: number;
        main: {
            temp: number;
            pressure: number;
            humidity: number;
        };
        weather: Array<{
            description: string;
        }>;
    }>;
}


class WeatherService {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    }
}

export default WeatherService;

const weatherService = new WeatherService('YOUR_API_KEY');

const getWeatherData = async () => {
    

}

getWeatherData();
