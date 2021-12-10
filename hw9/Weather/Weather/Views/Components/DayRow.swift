//
//  DayRow.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/5/21.
//

import SwiftUI

struct DayRow: View {
    var day: DailyWeather.Day
    
    var body: some View {
        HStack {
            Text(formatStringDate(date: day.startTimeDate))
                .font(.system(size: 15))
            day.weatherImage
                .resizable()
                .frame(width: 30, height: 30)
            Text(formatStringTime(date: day.sunriseTimeDate))
                .font(.system(size: 15))
            Image("sun-rise")
                .resizable()
                .frame(width: 30, height: 30)
            Text(formatStringTime(date: day.sunsetTimeDate))
                .font(.system(size: 15))
            Image("sun-set")
                .resizable()
                .frame(width: 30, height: 30)
        }
    }
}

func formatStringDate(date: Date) -> String {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "MM/dd/YYYY"
    return dateFormatter.string(from: date)
}

func formatStringTime(date: Date) -> String {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "HH:mm"
    return dateFormatter.string(from: date)
}

struct DayRow_Previews: PreviewProvider {
    static var dayilyWeather = ModelData().dailyWeather
    static var previews: some View {
        DayRow(day: dayilyWeather.data[0])
        
        DayRow(day: dayilyWeather.data[10])
    }
}
