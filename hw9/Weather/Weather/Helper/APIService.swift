//
//  API.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 11/26/21.
//

import Foundation
import Alamofire

public class APIService {
    public static let shared = APIService()
    
    static let useExample = false;
    
    static let dailyURL = "https://csci571-chenshu-nodejs-v2.azurewebsites.net/timelines"
    static let dailyExampleURL = "https://csci571-chenshu-nodejs-v2.azurewebsites.net/timelines/example"
    
    public static func getDailyURL(lat: Double, lng: Double) -> String {
        if useExample {
            return "\(dailyExampleURL)"
        } else {
            return "\(dailyURL)?lat=\(lat)&lng=\(lng)"
        }
    }
    
    static let hourlyURL = "https://csci571-chenshu-nodejs-v2.azurewebsites.net/hourly"
    static let hourlyExampleURL = "https://csci571-chenshu-nodejs-v2.azurewebsites.net/hourly/example"
    
    public static func getHourlyURL(lat: Double, lng: Double) -> String {
        if useExample {
            return "\(hourlyExampleURL)"
        } else {
            return "\(hourlyURL)?lat=\(lat)&lng=\(lng)"
        }
    }
    
    static let locationURL = "https://maps.googleapis.com/maps/api/geocode/json"
    static let apiKey = "AIzaSyBmRnM9YBpvHa1SkTZYSZ55p5mB5v1_rFc"
    
    public static func getLocationURL(loc: String) -> String {
        var url = URLComponents(string: locationURL)!

        url.queryItems = [
            URLQueryItem(name: "address", value: loc),
            URLQueryItem(name: "key", value: apiKey)
        ]
        return url.string ?? ""
    }
    
    public enum APIError: Error {
        case error(_ errorString: String)
    }
    
    public func getJSON<T: Decodable>(urlString: String,
                                           dateDecodingStrategy: JSONDecoder.DateDecodingStrategy = .deferredToDate,
                                           keyDecodingStrategy: JSONDecoder.KeyDecodingStrategy = .useDefaultKeys,
                      completion: @escaping (Result<T, APIError>) -> Void) {
        
        guard let url = URL(string: urlString) else {
            completion(.failure(.error(NSLocalizedString("Error: Invalid URL", comment: ""))))
            return
        }
        
        let request = URLRequest(url: url)
        URLSession.shared.dataTask(with: request) { (data, response, error) in
            if let error = error {
                completion(.failure(.error("Error0: \(error.localizedDescription)")))
                return
            }
            
            guard let data = data else {
                completion(.failure(.error(NSLocalizedString("Error: Data us corrupt.", comment: ""))))
                return
            }
            
            let decoder = JSONDecoder()
            decoder.dateDecodingStrategy = dateDecodingStrategy
            decoder.keyDecodingStrategy = keyDecodingStrategy
            do {
                let decodedData = try decoder.decode(T.self, from: data)
                completion(.success(decodedData))
                return
            } catch let decodingError {
                completion(.failure(APIError.error("Error1: \(decodingError.localizedDescription)")))
                return
            }
            
        }.resume()
    }

}
