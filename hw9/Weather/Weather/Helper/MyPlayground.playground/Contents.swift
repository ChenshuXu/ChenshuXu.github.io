import UIKit
import Alamofire
import SwiftyJSON

var greeting = "Hello, playground"


let location = ["lat": 33.8840, "lng": -84.5144]

AF.request("https://csci571-chenshu-nodejs-v2.azurewebsites.net/timelines/example",
           parameters: location).responseJSON { (response) in
    switch response.result {
        case .success(let value):
            let json = JSON(value)
            debugPrint(json)
        case .failure(let error):
            print(error)
    }
}
