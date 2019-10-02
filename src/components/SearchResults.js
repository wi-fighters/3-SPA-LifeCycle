import React, { Component } from 'react';
import User from './User';

class SearchResults extends Component {
    
    state = {
        users: [
            { id: 1000, name: 'John Smith', email: 'john@abc.com' },
            { id: 1001, name: 'Kyra Johnson', email: 'kyra@gmail.com' },
            { id: 1002, name: 'Kelly Brandon', email: 'k.brandon@microsoft.com' },
            { id: 1003, name: 'Peter Weller', email: 'peter.weller@robocop.com' },
            { id: 1004, name: 'Brandon Fisher', email: 'b.fisher@disney.com' },
            { id: 1005, name: 'Quentin Jackson', email: 'quentin@miramax.com' },
            { id: 1006, name: 'Jeanna La Croisse', email: 'jlc@bingo-now.org' },
            { id: 1007, name: 'Herbert Rocks', email: 'herby@sofast.net' },
            { id: 1008, name: 'Mike Johnson', email: 'mike@microsoft.com' },
            { id: 1009, name: 'Sarah Michaels', email: 'sarah.m@abc.com' }
        ]
    }
    
    render() {
        return (
            <div className="results">
                <table>
                <thead>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>  
                </thead>
                {this.state.users && this.state.users.map(
                    (user) => <User id={user.id} name={user.name} email={user.email} />
                )}
                </table>
            </div>
        )
    }
}

export default SearchResults;