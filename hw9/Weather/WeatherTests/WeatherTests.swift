//
//  WeatherTests.swift
//  WeatherTests
//
//  Created by Chenshu Xu on 12/6/21.
//

import XCTest
@testable import Weather

class WeatherTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

//    func testExample() throws {
//        // This is an example of a functional test case.
//        // Use XCTAssert and related functions to verify your tests produce the correct results.
//    }
//
//    func testPerformanceExample() throws {
//        // This is an example of a performance test case.
//        self.measure {
//            // Put the code you want to measure the time of here.
//        }
//    }
    
    func testDailyAPI() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        let apiService = APIService.shared;
        let url = APIService.getDailyURL(lat: 33.8840, lng: -84.5144);
        print(url);
        
        var response: DailyWeather?
        let expectation = XCTestExpectation(description: "Check API call")
        
        apiService.getJSON(urlString: url) { (result: Result<DailyWeather, APIService.APIError>) in
            switch result {
                case .success(let f):
                    response = f
                    print(f)
                    XCTAssertNotNil(response, "API is not giving any response, please check with your backend developer")
                    expectation.fulfill()
                case .failure(let apiError):
                    switch apiError {
                        case .error(let errorString):
                            print(errorString)
                    }
            }
        }
        wait(for: [expectation], timeout: 5)
    }
    
    func testLocationAPI() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        let apiService = APIService.shared
        let url = APIService.getLocationURL(loc: "Los Angeles ddd fwef sdf ds")
        print(url)
        
        var response: LocationData?
        let expectation = XCTestExpectation(description: "Check API call")
        
        apiService.getJSON(urlString: url) { (result: Result<LocationData, APIService.APIError>) in
            switch result {
                case .success(let f):
                    response = f
                    print(f)
                    XCTAssertNotNil(response, "API is not giving any response, please check with your backend developer")
                    expectation.fulfill()
                case .failure(let apiError):
                    switch apiError {
                        case .error(let errorString):
                            print(errorString)
                    }
            }
        }
        wait(for: [expectation], timeout: 5)
    }
    
    func testGetWeatherFromString() throws {
        let apiService = APIService.shared
        let url = APIService.getLocationURL(loc: "Los Angeles")
        print(url)
        
        var response: DailyWeather?
        let expectation = XCTestExpectation(description: "Check API call")
        
        apiService.getJSON(urlString: url) { (result: Result<LocationData, APIService.APIError>) in
            switch result {
                case .success(let location):
                    print(location)
                    let url = APIService.getDailyURL(lat: location.results[0].geometry.location.lat, lng: location.results[0].geometry.location.lng);
                    print(url);
                    apiService.getJSON(urlString: url) { (result: Result<DailyWeather, APIService.APIError>) in
                        switch result {
                            case .success(let f):
                                response = f
                                print(f)
                                XCTAssertNotNil(response, "API is not giving any response, please check with your backend developer")
                                expectation.fulfill()
                            case .failure(let apiError):
                                switch apiError {
                                    case .error(let errorString):
                                        print(errorString)
                                }
                        }
                    }
                case .failure(let apiError):
                    switch apiError {
                        case .error(let errorString):
                            print(errorString)
                    }
            }
        }
        
        wait(for: [expectation], timeout: 10)
    }

}
