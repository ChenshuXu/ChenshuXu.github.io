//
//  WeatherViewModel.swift
//  Weather
//
//  Created by Chenshu Xu on 12/6/21.
//

import Foundation
import SwiftUI
import SwiftSpinner

class WeatherViewModel: ObservableObject {
    struct AppError: Identifiable {
        let id = UUID().uuidString
        let errorString: String
    }
    
    @Published var favWeather: [DailyWeather] = [ModelData().dailyWeather]
    @Published var dailyWeather: DailyWeather = ModelData().dailyWeather
    @Published var isLoading: Bool = false
    var appError: AppError? = nil
    @AppStorage("location") var storageLocation: String = ""
    @Published var location = ""
    
    init() {
        location = storageLocation
        getWeatherForecast()
    }
    
    func getWeatherForecast() {
        print(location)
        
        if location != "" {
            isLoading = true
            SwiftSpinner.show("Fatching weather data for \(location)")
            let apiService = APIService.shared
            let url = APIService.getLocationURL(loc: location)
            print(url)
            
            apiService.getJSON(urlString: url) { (result: Result<LocationData, APIService.APIError>) in
                switch result {
                    case .success(let locationData):
                        DispatchQueue.main.async {
                            self.storageLocation = self.location
                        }
                        print(locationData)
                        let url = APIService.getDailyURL(lat: locationData.results[0].geometry.location.lat, lng: locationData.results[0].geometry.location.lng);
                        print(url);
                        apiService.getJSON(urlString: url) { (result: Result<DailyWeather, APIService.APIError>) in
                            switch result {
                                case .success(let weatherData):
                                    DispatchQueue.main.async {
                                        self.dailyWeather = weatherData
                                        self.dailyWeather.location = self.location
                                        self.isLoading = false
                                        SwiftSpinner.hide()
                                    }
                                case .failure(let apiError):
                                    switch apiError {
                                        case .error(let errorString):
                                            self.isLoading = false
                                            SwiftSpinner.hide()
                                            self.appError = AppError(errorString: errorString)
                                            print(errorString)
                                    }
                            }
                        }
                    case .failure(let apiError):
                        switch apiError {
                            case .error(let errorString):
                                self.isLoading = false
                                SwiftSpinner.hide()
                                self.appError = AppError(errorString: errorString)
                                print(errorString)
                        }
                }
            }
        }
    }
}
