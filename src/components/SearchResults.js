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
    
    lastSearchFor = null; // null means, there has not been any search yet.
    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate...');
        
        console.log(`${nextProps.searchFor}, ${this.lastSearchFor}`);

        if(nextProps.searchFor === this.lastSearchFor) {
          console.log('The new searchTerm is equal to the last searchTerm. Do not re-render.');
          return false;
        }
        else {
          console.log('The new searchTerm differs to the last searchTerm. Re-render.');
          this.lastSearchFor = nextProps.searchFor;
          return true;
        }
    }

    componentDidMount = async () => {
        console.log('the SeachResults-component has been mounted.');
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await result.json();
            
            const users = [];
            for(let user of data) {
                users.push({
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
            }

            this.setState({
                users: users
            });
        }
        catch(e) {
            console.log(e);
        }
    }

    componentWillUnmount() {
        console.log('the SeachResults-component has unmounted.');
    }

    render() {
        const searchForLower = new String(this.lastSearchFor).toLowerCase();
        return (
            <div className="results">
                <table>
                <thead>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>  
                </thead>
                {this.state.users && this.state.users
                .filter(user => user.name.toLowerCase().includes(searchForLower) || user.email.toLowerCase().includes(searchForLower))
                .map(
                    (user) => <User id={user.id} name={user.name} email={user.email} />
                )}
                </table>
            </div>
        )
    }
}

export default SearchResults;