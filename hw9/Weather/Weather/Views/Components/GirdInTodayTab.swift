//
//  GirdInTodayTab.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/5/21.
//

import SwiftUI

struct GirdInTodayTab: View {
    var image: Image
    var line1: String
    var line2: String
    var body: some View {
        VStack {
            image
                .resizable()
                .frame(width: 70, height: 70)
            Text(line1)
            Text(line2)
        }
            .frame(width: 110, height: 140)
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
}

struct GirdInTodayTab_Previews: PreviewProvider {
    static var previews: some View {
        GirdInTodayTab(image: Image("WindSpeed"), line1: "0.0 mph", line2: "Wind Speed")
    }
}
