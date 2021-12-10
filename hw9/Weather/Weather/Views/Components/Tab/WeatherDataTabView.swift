//
//  WeatherDataTabView.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/5/21.
//

import SwiftUI

struct WeatherDataTabView: View {
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
                    VStack {
                        Image("Precipitation")
                            .resizable()
                            .scaledToFit()
                        Image("Humidity")
                            .resizable()
                            .scaledToFit()
                        Image("CloudCover")
                            .resizable()
                            .scaledToFit()
                    }
                    .padding()
                    VStack {
                        Text("Precipitation: \(current.precipitationProbability, specifier: "%.1f") %")
                            .padding()
                        Text("Humidity: \(current.humidity, specifier: "%.1f") %")
                            .padding()
                        Text("Cloud Cover: \(current.cloudCover, specifier: "%.1f") %")
                            .padding()
                    }
                }
                .frame(width: 350, height: 200)
                .background(
                    ZStack {
                        RoundedRectangle(cornerRadius: 10)
                                .fill(Color.white)
                                .opacity(0.5)
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(Color.white, lineWidth: 2)
                    }
                )
                .padding(.vertical, 40)
                WeatherDataChart(current: current)
                    .padding(.bottom, 50)
            }
        }
    }
}

struct WeatherDataTabView_Previews: PreviewProvider {
    static var dailyWeather = ModelData().dailyWeather
    static var previews: some View {
        WeatherDataTabView(dailyWeather: dailyWeather)
    }
}
