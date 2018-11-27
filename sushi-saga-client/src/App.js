import React, {Component} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
    state = {
        balance: 100,
        page: 0,
        sushi: [],
        eaten: []
    };

    fetchData = async (url) => {
        return (url) ? await fetch(url)
            .then(resp => resp.json()) : []
    };

    async componentDidMount() {
        const sushi = await this.fetchData(API);
        sushi.forEach(item => {
           item.clicked = false
        });
        this.setState({sushi})
    }

    paginationHandler = () => {
        this.setState({page: this.state.page + 1})
    };

    clickOnSushiTable = (plate) => {
        const newBalance = this.state.balance - plate.price;

        if (newBalance >= 0) {
            const eaten = [...this.state.eaten];
            eaten.push(plate);

            const statesSushi = [...this.state.sushi];
            const clickedSushi = statesSushi.find(item => item.id === plate.id);

            clickedSushi.clicked = true;

            this.setState({
                eaten,
                balance: this.state.balance - plate.price,
                sushi: [...statesSushi]
            })
        }

    };

    render() {
        const sushiToRender = this.state.sushi.slice(this.state.page * 4, this.state.page * 4 + 4);

        return (
            <div className="app">
                <SushiContainer
                    sushiToRender={sushiToRender}
                    paginationHandler={this.paginationHandler}
                    clickOnSushiTable={this.clickOnSushiTable}/>
                <Table balance={this.state.balance} eaten={this.state.eaten}/>
            </div>
        );
    }
}

export default App;