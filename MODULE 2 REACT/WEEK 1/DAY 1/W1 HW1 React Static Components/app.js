class App extends React.Component {
  render () {
    return(
    <div id="container">
    <Sidebar />
    <Reviews />
    <Visitors />
    </div>
    )}
};

class Sidebar extends React.Component {
  render () {
      return(
    <div id="sidebar"> 
    <h1>Dashboard</h1>
    <h1>Widget</h1>
    <h1>Reviews</h1>
    <h1>Customers</h1>
    <h1>Online Analysis</h1>
    <h1>Settings</h1>
     </div>
    )}
};

class Reviews extends React.Component {
  render () {
      return(
    <div id="reviews">
        <div id="rev">
            <h1>Reviews</h1>
            <h2>1,281</h2>
        </div>
        <div id="rev">
            <h1>Average Rating</h1>
            <h2>4.6</h2>
        </div>
        <div id="rev">
            <h1>Sentiment Analysis</h1>
            <h3>960</h3>
            <h3>122</h3>
            <h3>321</h3>        
        </div>
    </div>
    )}
};


class Visitors extends React.Component {
  render () {
      return(
    <div id="visitors">
        <div id="vis">
            <h1>Website Visitors</h1>
            <h2>821</h2>

        </div>
        <div id="vis">
            <img src="graph.svg"/>
        </div>
    </div>
    )}
};

ReactDOM.render(<App />, document.querySelector('.container'));