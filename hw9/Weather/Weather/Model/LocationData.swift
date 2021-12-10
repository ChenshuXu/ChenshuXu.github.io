//
//  LocationData.swift
//  Weather
//
//  Created by Chenshu Xu on 12/6/21.
//

import Foundation

struct LocationData: Codable {
    struct Results: Codable {
        struct Geometry: Codable {
            struct Location: Codable {
                let lat: Double
                let lng: Double
            }
            let location: Location
        }
        let geometry: Geometry
    }
    let results: [Results]
    let status: String
}
