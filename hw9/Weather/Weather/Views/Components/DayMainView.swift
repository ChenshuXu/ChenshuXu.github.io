//
//  DayMainView.swift
//  Weather
//
//  Created by Chenshu Xu on 12/6/21.
//

import SwiftUI

struct DayMainView: View {
    var dailyWeather: DailyWeather
    var days: [DailyWeather.Day] {
        dailyWeather.data
    }
    var current: DailyWeather.Day {
        days[0]
    }
    
    var body: some View {
        VStack {
            /// sub view 1
            NavigationLink(destination: DayDetailView(dailyWeather: dailyWeather)) {
                DaySummaryView(dailyWeather: dailyWeather)
            }
            
            /// sub view 2
            HStack {
                VStack {
                    Text("Humidity")
                    Image("Humidity")
                    Text(String(current.humidity) + " %")
                }
                VStack {
                    Text("Wind Speed")
                    Image("WindSpeed")
                    Text(String(current.windSpeed) + " mph")
                }
                VStack {
                    Text("Visibility")
                    Image("Visibility")
                    Text(String(current.visibility) + " mi")
                }
                VStack {
                    Text("Pressure")
                    Image("Pressure")
                    Text(String(current.pressureSeaLevel) + " inHg")
                }
            }
            
            /// day weather list
            DayList(dailyWeather: dailyWeather)
                .padding(.horizontal)
                .padding()
        }
        .navigationBarTitle("Weather")
        .navigationBarHidden(true)
    }
}

struct DayMainView_Previews: PreviewProvider {
    static var previews: some View {
        DayMainView(dailyWeather: ModelData().dailyWeather)
    }
}
