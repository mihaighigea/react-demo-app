import React from 'react';
import Page from './page';

class DemoTable extends React.Component {

    state = {
        isLoading: false,
        items: null,
        error: null
    };

    loadItems = user => {
        this.setState({
            isLoading: true,
            items: null,
        });
        fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                user: user.name
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoading: false,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoading: false,
                    error
                });
            }
        )
    };

    componentDidMount() {
        this.loadItems(this.props.selectedUser);
    }

    componentWillReceiveProps(newProps) {
        this.loadItems(newProps.selectedUser);
    }

    render() {
        return (
            <div>
                <Page
                    items={this.state.items}
                    isLoading={this.state.isLoading}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default DemoTable;
