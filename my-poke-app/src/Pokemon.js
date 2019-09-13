import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Pokemon extends Component {

    state = {
        name: '',
        url: '',
        index: ''
    }

    componentDidMount()
    {
        const {name, url} = this.props;
        const index = url.split('/')[url.split('/').length - 2];

        this.setState({
            name,
            url,
            index
        })
    }

    render() {
        return (
            <div className='col-md-3 mb-2'>
                <Link to={`pokemondetails/${this.state.index}`}>
                    <div className="card">
                        <div className="card-header">
                            <h3>{this.state.name}</h3>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
