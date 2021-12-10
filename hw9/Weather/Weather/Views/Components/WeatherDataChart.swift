//
//  WeatherDataChart.swift
//  Weather
//
//  Created by Chenshu Xu on 12/9/21.
//

import Highcharts
import UIKit
import SwiftUI

struct WeatherDataChart: UIViewControllerRepresentable {
    var current: DailyWeather.Day
    
    func makeUIViewController(context: Context) -> UIViewController {
        return ActivityRingViewController(current: self.current)
    }
    
    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {
        
    }
}

class ActivityRingViewController: UIViewController {
    var current: DailyWeather.Day
    
    init(current: DailyWeather.Day) {
        self.current = current
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
        chartView.plugins = ["solid-gauge"]

        let options = HIOptions()

        let chart = HIChart()
        chart.type = "solidgauge"
        chart.height = "80%"
        options.chart = chart

        let title = HITitle()
        title.text = "Weather Data"
        title.style = HICSSObject()
        title.style.fontSize = "24px"
        options.title = title

        let tooltip = HITooltip()
        tooltip.borderWidth = 0
        tooltip.shadow = HIShadowOptionsObject()
        tooltip.shadow.opacity = 0
        tooltip.style = HICSSObject()
        tooltip.style.fontSize = "16px"
        tooltip.valueSuffix = "%"
        tooltip.pointFormat = "{series.name}<br><span style=\"font-size:2em; color: {point.color}; font-weight: bold\">{point.y}</span>"
        tooltip.positioner = HIFunction(jsFunction: "function (labelWidth) { return { x: (this.chart.chartWidth - labelWidth) / 2, y: (this.chart.plotHeight / 2) + 15 }; }")
        options.tooltip = tooltip

        let pane = HIPane()
        pane.startAngle = 0
        pane.endAngle = 360

        let background1 = HIBackground()
        background1.backgroundColor = HIColor(rgba: 201, green: 235, blue: 166, alpha: 0.35)
        background1.outerRadius = "112%"
        background1.innerRadius = "88%"
        background1.borderWidth = 0

        let background2 = HIBackground()
        background2.backgroundColor = HIColor(rgba: 201, green: 226, blue: 255, alpha: 0.35)
        background2.outerRadius = "87%"
        background2.innerRadius = "63%"
        background2.borderWidth = 0

        let background3 = HIBackground()
        background3.backgroundColor = HIColor(rgba: 255, green: 203, blue: 202, alpha: 0.35)
        background3.outerRadius = "62%"
        background3.innerRadius = "38%"
        background3.borderWidth = 0

        pane.background = [
          background1, background2, background3
        ]

        options.pane = pane

//        let yAxis = HIYAxis()
//        yAxis.min = 0
//        yAxis.max = 100
//        yAxis.lineWidth = 0
//        yAxis.tickPosition = ""
//        options.yAxis = [yAxis]

        let plotOptions = HIPlotOptions()
        plotOptions.solidgauge = HISolidgauge()
        let dataLabels = HIDataLabels()
        dataLabels.enabled = false
        plotOptions.solidgauge.dataLabels = [dataLabels]
        plotOptions.solidgauge.linecap = "round"
        plotOptions.solidgauge.stickyTracking = false
        plotOptions.solidgauge.rounded = true
        options.plotOptions = plotOptions

        let precipitation = HISolidgauge()
        precipitation.name = "Precipitation"
        let precipitationData = HIData()
        precipitationData.color = HIColor(rgba: 180, green: 277, blue: 132, alpha: 1)
        precipitationData.radius = "112%"
        precipitationData.innerRadius = "88%"
        precipitationData.y = self.current.precipitationProbability as NSNumber
        precipitation.data = [precipitationData]

        let humidity = HISolidgauge()
        humidity.name = "Humidity"
        let humidityData = HIData()
        humidityData.color = HIColor(rgba: 181, green: 215, blue: 255, alpha: 1)
        humidityData.radius = "87%"
        humidityData.innerRadius = "63%"
        humidityData.y = self.current.humidity as NSNumber
        humidity.data = [humidityData]

        let cloudCover = HISolidgauge()
        cloudCover.name = "Cloud Cover"
        let cloudCoverData = HIData()
        cloudCoverData.color = HIColor(rgba: 255, green: 108, blue: 101, alpha: 1)
        cloudCoverData.radius = "62%"
        cloudCoverData.innerRadius = "38%"
        cloudCoverData.y = self.current.cloudCover as NSNumber
        cloudCover.data = [cloudCoverData]

        options.series = [precipitation, humidity, cloudCover]

        chartView.options = options
        print("in weather data chart")
        print(self.current)
        self.view.addSubview(chartView)
  }

}
