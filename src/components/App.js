import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] }; 
    
    onSearchSubmit = async (term) => { //async är samma som .then(), använd async innan metoden,
      const res = await axios //lägg till await innan det som hämtas(get) data och lägg in det i en variabel "res"
        .get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 989380f3fc3c623e10ac3bd206d8846d0ab21f51a6a6fda6c311d8e4cac422b6'
            }
        });

        this.setState({ images: res.data.results });
    }

    render() {
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
    </div>
    );
  }
}
export default App;