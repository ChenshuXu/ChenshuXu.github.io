//
//  WeatherSearchTests.swift
//  WeatherSearchTests
//
//  Created by Chenshu Xu on 11/30/21.
//

import XCTest
@testable import WeatherSearch

class WeatherSearchTests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

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
    
    func testHourlyAPI() throws {
        let apiService = APIService.shared;
        let url = APIService.getDailyURL(lat: 33.8840, lng: -84.5144);
        print(url);
        
        var response: HourlyWeather?
        let expectation = XCTestExpectation(description: "Check API call")
        
        apiService.getJSON(urlString: url) { (result: Result<HourlyWeather, APIService.APIError>) in
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

}
