//
//  DailyWeather.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 11/26/21.
//

import Foundation
import SwiftUI

struct DailyWeather: Codable, Hashable {
    struct Day: Codable, Identifiable, Hashable {
        var id: String { startTime }
        
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
        let sunriseTime: String

        var sunriseTimeDate: Date {
            ISO8601DateFormatter().date(from:sunriseTime)!
        }

        let sunsetTime: String

        var sunsetTimeDate: Date {
            ISO8601DateFormatter().date(from:sunsetTime)!
        }

        let visibility: Double
        let cloudCover: Double
    }
    let data: [Day]
    let error: String?
    var location: String?
}
