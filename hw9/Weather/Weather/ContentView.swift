//
//  ContentView.swift
//  Weather
//
//  Created by Chenshu Xu on 12/6/21.
//

import SwiftUI

struct ContentView: View {
    @StateObject var weatherVM = WeatherViewModel()
    @State private var isShowingDetailView = false
    
//    @State var dailyWeather: DailyWeather? = nil
    @State var showClearButton = false
    
    var body: some View {
        NavigationView{
            ZStack {
                BackgroundView()
                VStack {
                    /// search bar
                    HStack {
                        HStack {
                            TextField("Enter City Name...", text: $weatherVM.location,
                                      onCommit: {
                                            weatherVM.getWeatherForecast()
                                        })
                            if weatherVM.location != "" {
                                Image(systemName: "xmark.circle.fill")
                                    .imageScale(.medium)
                                    .foregroundColor(Color(.systemGray3))
                                    .padding(3)
                                    .onTapGesture {
                                        withAnimation {
                                            weatherVM.location = ""
                                        }
                                    }
                            }
                        }
                        .padding(.horizontal)
                        .padding(.vertical, 10)
                        .background(Color(.systemGray6))
                        .cornerRadius(10)
                        
                        Button {
                            weatherVM.getWeatherForecast()
                        } label: {
                            Image(systemName: "magnifyingglass.circle.fill")
                                .imageScale(.medium)
                        }
                        
                    }
                    .padding(.horizontal)
                    .background(Color(.systemBackground))
                    
                    /// favorite lists
//                    TabView {
//                        ForEach(weatherVM.favWeather, id: \.hashValue) { weatherData in
//                            DayMainView(dailyWeather: weatherData)
//                        }
//                    }
//                    .tabViewStyle(.page)
//                    .indexViewStyle(.page(backgroundDisplayMode: .always))
                    
                    /// day main view
                    DayMainView(dailyWeather: weatherVM.dailyWeather)
                }
            }
            .navigationBarTitle("Weather")
            .navigationBarHidden(true)
        }
    }
    
    
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
