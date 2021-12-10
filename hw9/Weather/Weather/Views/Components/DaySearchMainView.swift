//
//  DaySearchMainView.swift
//  Weather
//
//  Created by Chenshu Xu on 12/6/21.
//

import SwiftUI

struct DaySearchMainView: View {
    var dailyWeather: DailyWeather

    var body: some View {
            ZStack {
                BackgroundView()
                DayMainView(dailyWeather: dailyWeather)
            }
            .navigationBarTitle(dailyWeather.location ?? "Weather")
            .navigationBarHidden(true)
        
    }
        
}

struct DaySearchMainView_Previews: PreviewProvider {
    static var previews: some View {
        DaySearchMainView(dailyWeather: ModelData().dailyWeather)
    }
}
