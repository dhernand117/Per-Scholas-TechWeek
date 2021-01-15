class App extends React.Component {
    state = {
        groceries,
        item: "",
        brand: "",
        units: ""
    }
    itemChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submit = (event) => {
        event.preventDefault()
        console.log("submit");
        const item = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: 1,
            isPurchased: false
        }
        this.setState({
            groceries: [
                item, ...this.state.groceries
            ],
            item: "",
            brand: "",
            units: ""
        })
    }
    render() {
        return (<div id="div1">
            <h1>Please add your Items Below</h1>
            <form onSubmit={this.submit}>
                <input id="item" onChange={this.itemChange} type='text' value={this.state.item} placeholder='Item type'></input>
                <input id="brand" onChange={this.itemChange} type='text' value={this.state.brand} placeholder='Brand'></input>
                <input id="units" onChange={this.itemChange} type='text' value={this.state.units} placeholder='Units'></input>
                <button>Add more Items</button>
            </form>
            <div id="div2">
                <ul>
                    {
                        this.state.groceries.map(
                            (grocery) => !grocery.isPurchased
                            ? <li>Item: {grocery.item} - Brand:{grocery.brand} - Units: {grocery.units}</li>
                            : "")
                    }
                </ul>
            </div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))