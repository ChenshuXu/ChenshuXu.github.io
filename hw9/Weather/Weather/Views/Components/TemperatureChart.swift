//
//  TemperatureChart.swift
//  Weather
//
//  Created by Chenshu Xu on 12/9/21.
//

import Highcharts
import UIKit
import SwiftUI

struct TemperatureChart: UIViewControllerRepresentable {
    var days: [DailyWeather.Day]
    
    func makeUIViewController(context: Context) -> UIViewController {
        return ViewController(days: self.days)
    }
    
    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {
        
    }
}

class ViewController: UIViewController {
    var days: [DailyWeather.Day]

    init(days: [DailyWeather.Day]) {
        self.days = days
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) is not supported")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

        let chartView = HIChartView(frame: CGRect(x: view.bounds.origin.x,
                                                  y: view.bounds.origin.y + 20,
                                                  width: view.bounds.size.width,
                                                  height: 300))
        
        let options = HIOptions()

        let chart = HIChart()
        
        chart.type = "arearange"
        chart.zoomType = "x"
        chart.scrollablePlotArea = HIScrollablePlotArea()
//        chart.scrollablePlotArea.minWidth = 600
//        chart.scrollablePlotArea.scrollPositionX = 1
        options.chart = chart

        let title = HITitle()
        title.text = "Temperature variation by day"
        options.title = title

        let xAxis = HIXAxis()
        options.xAxis = [xAxis]

        let yAxis = HIYAxis()
        yAxis.title = HITitle()
        options.yAxis = [yAxis]

        let tooltip = HITooltip()
        // tooltip.crosshairs = true
        tooltip.shared = true
        tooltip.valueSuffix = "°F"
        options.tooltip = tooltip

        let legend = HILegend()
        legend.enabled = false
        options.legend = legend

        let temperatures = HIArearange()
        temperatures.name = "Temperatures"
        temperatures.data = getData()
        temperatures.lineColor = HIColor(hexValue: "ffa40d")
        temperatures.fillColor = HIColor(linearGradient: ["x1": 0, "x2": 0, "y1": 0, "y2": 1],
                                        stops: [
                                          [0, "rgb(255, 165, 0)"],
                                          [1, "rgb(100, 170, 221)"]
                                        ])
        

        options.series = [temperatures]

        chartView.options = options
        
        print("in chart1")
        print(self.days.count)

        self.view.addSubview(chartView)
  }

  private func getData() -> [Any] {
      var data: [Any] = []
      var count: Int = 0
      for day in self.days {
          data.append([count, day.temperatureMin, day.temperatureMax])
          count += 1
      }
      return data
  }

}
