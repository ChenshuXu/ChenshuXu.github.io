//
//  DayDetailView.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/5/21.
//

import SwiftUI

struct DayDetailView: View {
    @State private var selection: Tab = .today
    var dailyWeather: DailyWeather
    var days: [DailyWeather.Day] {
        dailyWeather.data
    }
    var current: DailyWeather.Day {
        days[0]
    }
    
    var urlString: String {
        var url = URLComponents(string: "https://twitter.com/intent/tweet")!

        url.queryItems = [
            URLQueryItem(name: "text", value: "The temperature in \(dailyWeather.location ?? "") on \(current.dateText) is \(current.temperature) °F. The weather conditions are \(current.weatherCode)"),
            URLQueryItem(name: "hashtags", value: "CSCI571WeatherSearch")
        ]
        return url.string ?? ""
    }
    
    enum Tab {
        case today
        case weekly
        case weatherData
    }
    
    var body: some View {
        
        TabView(selection: $selection) {
            TodayTabView(dailyWeather: dailyWeather)
                .tabItem{
                    Text("Today")
                    Image("Today_Tab")
                }
                .tag(Tab.today)
            WeeklyTabView(dailyWeather: dailyWeather)
                .tabItem{
                    Text("Weekly")
                    Image("Weekly_Tab")
                }
            WeatherDataTabView(dailyWeather: dailyWeather)
                .tabItem{
                    Text("Weather Data")
                    Image("Weather_Data_Tab")
                }
        }
        .onAppear() {
            UITabBar.appearance().backgroundColor = .white
        }
        .navigationTitle(dailyWeather.location ?? "Weather")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            Link(destination: URL(string: urlString)!) {
                Image("twitter")
                    .foregroundColor(.blue)
            }
        }
    }
}

struct DayDetailView_Previews: PreviewProvider {
    static var dailyWeather = ModelData().dailyWeather
    static var previews: some View {
        DayDetailView(dailyWeather: dailyWeather)
    }
}
