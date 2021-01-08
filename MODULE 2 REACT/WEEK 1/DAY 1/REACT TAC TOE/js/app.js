class App extends React.Component {
  render () {
    return (
      <div>
      <Header />
      <Player className="O"/>
      <Player className="X"/>
      <Board />    
      </div>
    )

  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
      <h1>React Tac Toe</h1>
      </div>
    )}
}

//Player class
class Player extends React.Component {
  render () {
    return (
      <div className={this.props.className}>
        <h2>Player {this.props.className} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}
//board
class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}
//squares
class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.querySelector('.container'));