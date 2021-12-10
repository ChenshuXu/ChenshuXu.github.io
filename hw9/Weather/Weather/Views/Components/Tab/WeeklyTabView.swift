//
//  WeeklyTabView.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/5/21.
//

import SwiftUI

struct WeeklyTabView: View {
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
                    current.weatherImage
                        .resizable()
                        .frame(width: 100, height: 100)
                        .padding(.trailing, 70.0)
                    
                    VStack {
                        Text(current.weatherCode)
                            .font(.largeTitle)
                        Text("\(current.temperature, specifier: "%.1f") °F")
                            .font(.largeTitle)
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
                TemperatureChart(days: days)
                    .padding(.bottom, 50)
            }
        }
    }
}

struct WeeklyTabView_Previews: PreviewProvider {
    static var dailyWeather = ModelData().dailyWeather
    static var previews: some View {
        WeeklyTabView(dailyWeather: dailyWeather)
    }
}
