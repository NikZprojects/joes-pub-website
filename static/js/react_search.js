class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      searchTerm: "",
      setSearchTerm: ""
    };
  }

  componentWillMount() {
    fetch('./static/data/chemistrycocktails_production.json')
    .then(response => response.json())
    .then(data => {

      this.setState({items:data, isLoaded:true});
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app-content">
          <h1>Chemistry.Cocktails Search</h1>
          <input type="text" placeholder="Search..."
            onChange={(event) => {this.setState({setSearchTerm:event.target.value.replace( /[\r\n'*#@]+/gm, "" ).toLowerCase().trim()})}}
            autofocus />
          <div className="img_block">

            {this.state.items.filter((item) => {

              var searchableCaption = item.caption.replace( /[\r\n'"*#@]+/gm, " ").toLowerCase()
              var searchTerm = this.state.setSearchTerm


              function matchingItems(searchTerm, item) {
                if (searchableCaption.includes(" " + searchTerm.replace( /[",]+/gm, ""))) {
                  return item
                }
              }
              // If search bar empty:
              if (searchTerm == "") {
                return item

              } else {
                // Quote search:
                if (searchTerm[0] == '"' && searchTerm[searchTerm.length - 1] == '"') {
                  searchTerm += " "
                  if (matchingItems(searchTerm, item)) {
                    return item
                  }

                // Comma search:
                } else if (searchTerm.includes(",")) {
                  var searchTermArray = searchTerm.split(",")

                  for (let i = searchTermArray.length-1; i >= 0; i --) {
                    let currentSearch = searchTermArray[i].trim()
                    if (!matchingItems(currentSearch, item)) {
                      break
                    } else if (matchingItems(currentSearch, item) && i === 0) {
                      return item
                    }
                  }

                // Search:
              } else if (matchingItems(searchTerm, item)) {
                    return item
                  }
              }
            }).map(item => (
              <a href={item.permalink} target="_blank">
                <img id="ig_img" title={item.caption} alt={item.caption} src={item.media_url} loading="lazy"></img>
              </a>
            ))}
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
