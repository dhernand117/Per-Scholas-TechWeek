//*This will render our components into HTML
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
