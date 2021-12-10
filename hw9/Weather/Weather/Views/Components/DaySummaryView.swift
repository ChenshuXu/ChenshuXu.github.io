//
//  DaySummaryView.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/4/21.
//

import SwiftUI

struct DaySummaryView: View {
    var dailyWeather: DailyWeather
    var days: [DailyWeather.Day] {
        dailyWeather.data
    }
    var current: DailyWeather.Day {
        days[0]
    }
    
    var body: some View {
        VStack {
            HStack {
                current.weatherImage
                VStack {
                    Text(String(Int(current.temperature)) + "°F")
                    Text(current.weatherCode)
                    Text(dailyWeather.location ?? "")
                }
            }
            .padding(.all)
            .background(
                ZStack {
                    RoundedRectangle(cornerRadius: 10)
                            .fill(Color.white)
                            .opacity(0.5)
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(Color.white, lineWidth: 2)
                }
            )
        }
        .padding()
    }
        
    
}

struct DaySummaryView_Previews: PreviewProvider {
    static var dailyWeather = ModelData().dailyWeather
    static var previews: some View {
        DaySummaryView(dailyWeather: dailyWeather)
    }
}
