//*Main class to render our list of items
class TodoList extends React.Component {
  //*passing props to the constructor to set our initial state as an empty array
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    //*binding our addItem and deleteItem functions with the this keyword
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  //*addItem function will run an if else loop that will generate objects based on two properties
  addItem(e) {
    //
    if (this.inputElement.value !== "") {
      var newItem = {
        //*Setting our properties to hold a value based on the input and a unique key based on the current date
        //*This Date.now method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
        //*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
        text: this.inputElement.value,
        key: Date.now(),
      };
      //*using setState() enqueues changes to the component state and tells React that this component
      //*and its children need to be re-rendered with the updated state.
      this.setState((prevState) => {
        //*this will return add items into our empty array using the method concat
        //*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        //*The concat() method is used to merge two or more arrays. This method does not change the existing arrays,
        //* but instead returns a new array.
        return {
          items: prevState.items.concat(newItem),
        };
      });
      //*restarting the input box once the logic has run
      this.inputElement.value = "";
    }
    //*making sure that the elements are being created
    console.log(this.state.items);
    //*preventing that upon submiting the page refreshes
    e.preventDefault();
  }

  //*deleteItem function will pass the unique key of our objects as an argument and filter them inside whatever version of our array we are
  //*The filter method creates a new array with all elements that pass the test implemented by the provided function.
  //*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });
    //*re-rendering with setState to display without the filtered items
    this.setState({
      items: filteredItems,
    });
    //*making sure that the elements are being deleted
    console.log(this.state.items);
  }
  //*Main render that has a form that has an argument of a that will store any text inside of it and our button will run our
  //*addItem function onSubmit that is a property of react forms, these elements will be rendered inside with the TodoItems class that will pass props of entries and delete
  render() {
    return (
      <div className="todoListMain">
        <div className="main">
          <form onSubmit={this.addItem}>
            <input
              type="text"
              ref={(a) => (this.inputElement = a)}
              placeholder="enter task or anything really"></input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

//*This class will create each element of our to do list
class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  //*To complete our delete function We define a function called delete that takes our argument for the item key.
  //*To ensure this resolves properly, we explicitly bind this in the constructor so that createTasks can properly resolve the delete function
  delete(key) {
    this.props.delete(key);
  }
  //*Create tasks will pass an item as an argument and return a list item with item objects with our two values and
  //*that will run our delete function onClick
  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  render() {
    //*Variable todoEntries that will pass entries as props that will take the values of our current items array
    var todoEntries = this.props.entries;
    //*Variable that will map inside the array of created entries inside our items array
    var listItems = todoEntries.map(this.createTasks);
    //*The value stored by our listItems variable is an array of li elements containing the user content
    return <ul className="theList">{listItems}</ul>;
  }
}
