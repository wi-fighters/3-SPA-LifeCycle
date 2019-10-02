import React, { Component } from 'react';

class SearchResults extends Component {
    render() {
        return (
            <div className="results">
                <table>
                <thead>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>  
                </thead>
                <tr><td>1000</td><td>John Smith</td><td>john@abc.com</td></tr>
                <tr><td>1001</td><td>Kyra Johnson</td><td>kyra@gmail.com</td></tr>
                <tr><td>1002</td><td>Kelly Brandon</td><td>k.brandon@microsoft.com</td></tr>
                <tr><td>1003</td><td>Peter Weller</td><td>peter.weller@robocop.com</td></tr>
                <tr><td>1004</td><td>Brandon Fisher</td><td>b.fisher@disney.com</td></tr>
                <tr><td>1005</td><td>Quentin Jackson</td><td>quentin@miramax.com</td></tr>
                <tr><td>1006</td><td>Jeanna La Croisse</td><td>jlc@bingo-now.org</td></tr>
                <tr><td>1007</td><td>Herbert Rocks</td><td>herby@sofast.net</td></tr>
                <tr><td>1008</td><td>Mike Johnson</td><td>mike@microsoft.com</td></tr>
                <tr><td>1009</td><td>Sarah Michaels</td><td>sarah.m@abc.com</td></tr>
                </table>
            </div>
        )
    }
}

export default SearchResults;