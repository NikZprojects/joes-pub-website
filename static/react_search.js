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
    fetch('./static/chemistrycocktails4.json')
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
          />
          <div className="img_block">

            {this.state.items.filter((item) => {

              var searchableCaption = item.caption.replace( /[\r\n'"*#@]+/gm, " ").toLowerCase()
              var searchTerm = this.state.setSearchTerm


              if (searchTerm == "") {
                return item

              } else {
                if (searchTerm[0] == '"' && searchTerm[searchTerm.length - 1] == '"') {
                  searchTerm += " "
                  if (searchableCaption.includes(" " + searchTerm.replace( /[",]+/gm, ""))) {
                    console.log(searchTerm)
                    return item
                  }
                } else if (searchableCaption.includes(" " + searchTerm.replace( /[",]+/gm, ""))) {
                    console.log(searchTerm)
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
