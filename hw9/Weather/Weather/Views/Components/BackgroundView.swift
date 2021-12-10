//
//  BackgroundView.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/4/21.
//

import SwiftUI

struct BackgroundView: View {
    var body: some View {
        Image("App_background")
            .resizable()
            .scaledToFill()
            .edgesIgnoringSafeArea(.bottom)
    }
}

struct BackgroundView_Previews: PreviewProvider {
    static var previews: some View {
        BackgroundView()
    }
}
