import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => { //denna funktionen ser till att "formen" inte submitar default submiten när man klickar enter
        e.preventDefault(); 

        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Bild Sökning</label>
                    <input 
                    text="input" 
                    value={this.state.term} 
                    onChange={(e) => this.setState({ term: e.target.value })} 
                    />
                </div>
            </form>
        </div>
       );
    }
}

export default SearchBar;