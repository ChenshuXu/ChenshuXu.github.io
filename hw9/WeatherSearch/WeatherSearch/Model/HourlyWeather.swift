//
//  HourlyWeather.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 11/26/21.
//

import Foundation
import SwiftUI

struct HourlyWeather: Codable {
    struct Hour: Codable {
        let startTime: String
        
        var startTimeDate: Date {
            ISO8601DateFormatter().date(from:startTime)!
        }
        
        let dateText: String
        let temperature: Double
        let temperatureApparent: Double
        let temperatureMin: Double
        let temperatureMax: Double
        let windSpeed: Double
        let windDirection: Double
        let humidity: Double
        let pressureSeaLevel: Double
        let uvIndex: Double
        let weatherCode: String
        
        var weatherImage: Image {
            Image(weatherCode)
        }
        
        let precipitationProbability: Double
        let precipitationType: String
        let visibility: Double
        let cloudCover: Double
    }
    let data: [Hour]?
    let error: String?
}
