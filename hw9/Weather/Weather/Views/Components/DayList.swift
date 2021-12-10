//
//  DayList.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/5/21.
//

import SwiftUI

struct DayList: View {
    var dailyWeather: DailyWeather
    var days: [DailyWeather.Day] {
        dailyWeather.data
    }
    
    var body: some View {
        List {
            ForEach(days) {d in
                DayRow(day: d)
            }
        }
    }
}

struct DayList_Previews: PreviewProvider {
    static var dailyWeather = ModelData().dailyWeather
    
    static var previews: some View {
        DayList(dailyWeather: dailyWeather)
    }
}
