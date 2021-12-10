//
//  TodayView.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/5/21.
//

import SwiftUI

struct TodayTabView: View {
    var dailyWeather: DailyWeather
    var days: [DailyWeather.Day] {
        dailyWeather.data
    }
    var current: DailyWeather.Day {
        days[0]
    }
    
    var body: some View {
        ZStack {
            Image("App_background")
                .resizable()
                .padding(.top, 10)
            VStack {
                HStack {
                    GirdInTodayTab(image: Image("WindSpeed"), line1: "\(current.windSpeed) mph", line2: "Wind Speed")
                    GirdInTodayTab(image: Image("Pressure"), line1: "\(current.pressureSeaLevel) inHg", line2: "Wind Speed")
                    GirdInTodayTab(image: Image("Precipitation"), line1: "\(current.precipitationProbability) %", line2: "Wind Speed")
                }
                .padding(.vertical, 30)
                HStack {
                    GirdInTodayTab(image: Image("Temperature"), line1: "\(current.temperature) °F", line2: "Wind Speed")
                    GirdInTodayTab(image: current.weatherImage, line1: "\(current.weatherCode)", line2: "")
                    GirdInTodayTab(image: Image("Humidity"), line1: "\(current.humidity) %", line2: "Wind Speed")
                }
                .padding(.vertical, 30)
                HStack {
                    GirdInTodayTab(image: Image("Visibility"), line1: "\(current.visibility) mi", line2: "Visibility")
                    GirdInTodayTab(image: Image("CloudCover"), line1: "\(current.cloudCover) %", line2: "Cloud Cover")
                    GirdInTodayTab(image: Image("UVIndex"), line1: "\(current.uvIndex)", line2: "UVIndex")
                }
                .padding(.vertical, 30)
            }
        }
        
    }
}

struct TodayTabView_Previews: PreviewProvider {
    static var dailyWeather = ModelData().dailyWeather
    static var previews: some View {
        TodayTabView(dailyWeather: dailyWeather)
    }
}
