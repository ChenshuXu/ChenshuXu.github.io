//
//  SearchBarView.swift
//  WeatherSearch
//
//  Created by Chenshu Xu on 12/4/21.
//

import SwiftUI

struct SearchBarView: View {
    @Binding var searchText: String
    @State var showClearButton = false
    var placeholder = "Enter City Name..."
    
    var body: some View {
        HStack {
            HStack {
                TextField(placeholder, text: $searchText)
                if searchText != "" {
                    Image(systemName: "xmark.circle.fill")
                        .imageScale(.medium)
                        .foregroundColor(Color(.systemGray3))
                        .padding(3)
                        .onTapGesture {
                            withAnimation {
                                self.searchText = ""
                            }
                        }
                }
            }
            .padding(.horizontal)
            .padding(.vertical, 10)
            .background(Color(.systemGray6))
            .cornerRadius(10)
            
            
            Button {
                
            } label: {
                Image(systemName: "magnifyingglass.circle.fill")
                    .imageScale(.medium)
            }
        }
        .padding(.horizontal)
        .background(Color(.systemBackground))
    }
}

struct ClearButton: ViewModifier {
    @Binding var text: String
    @Binding var isVisible: Bool

    func body(content: Content) -> some View {
        HStack {
            content
            Spacer()
            Image(systemName: "xmark.circle.fill")
                .foregroundColor(Color(.placeholderText))
                .opacity(!text.isEmpty ? 1 : 0)
                .opacity(isVisible ? 1 : 0)
                .onTapGesture { self.text = "" }
        }
    }
}

struct SearchBarView_Previews: PreviewProvider {
    static var previews: some View {
        SearchBarView(searchText: .constant(""))
    }
}
