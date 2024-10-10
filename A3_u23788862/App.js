
// Event Component
class Event extends React.Component{
  
  render(){
    const { name, date, description } = this.props;

    return(
      <div className="event">
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    );
  }
}

// EventFeed Component
class EventFeed extends React.Component{
  render(){
    const sortedEvents = this.props.events.slice().sort((a,b) => new Date(b.date) - new Date(a.date));
    return(
      <div className="eventFeed">
        {sortedEvents.map((event, index) => (
          <Event key={index} name={event.name} date={event.date} description={event.description}/>
        ))}
      </div>
    );
  }
}

// Search Component
class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleInputChange(event) 
  {
    this.setState({ searchTerm: event.target.value });
  }

  search(event) 
  {
    event.preventDefault(); 
    this.props.handleSearch(this.state.searchTerm); 
  }

  render() {
    return (
      <form onSubmit={this.search}>
        <label htmlFor="searchInput">Search</label>
        <input id="searchInput" type="text" placeholder="Search Something..." value={this.state.searchTerm} onChange={this.handleInputChange} />
          <button type="submit">Search</button>
      </form>
    );

  }
}

// App Component
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       events : [
        {
          name: "A Walk in the Park",
          date: "2021-09-19",
          description: "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
        },
        {
          name: "Beach Day!",
          date: "2019-12-28",
          description: "Let's have a fun day on the beach right before #xmas !! #beachday #summertime"
        },
        {
          name: "Pokemon Go Meetup",
          date: "2016-06-11",
          description: "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup"
        },
        {
          name: "Crochet Date!",
          date: "2024-07-09",
          description: "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup"
        },
        {
          name: "Yoga in the Morning",
          date: "2022-07-15",
          description: "Join us for a refreshing morning #yoga session #wellness #morning"
        },
        {
          name: "Hackathon",
          date: "2023-03-10",
          description: "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding"
        },
        {
          name: "Summer Braai",
          date: "2021-08-05",
          description: "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun"
        },
        {
          name: "Art Exhibition",
          date: "2018-05-20",
          description: "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity"
        },
        {
          name: "Star Wars Under the Stars",
          date: "2023-05-04",
          description: "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou"
        },
        {
          name: "Live Concert: Rock the Night",
          date: "2023-06-25",
          description: "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic"
        },
        {
          name: "Farmers Market",
          date: "2024-04-01",
          description: "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic"
        },
        {
          name: "Comicon Anyone?",
          date: "2024-09-26",
          description: "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!"
        }
      ],
      filteredEvents: []
    };

    this.searchFeed = this.searchFeed.bind(this);
  }

  //I saw this method is a lifecycle method in react, it is called automaticaly after a component
  //is rendered for the first time
  componentDidMount() 
  {
    this.setState({ filteredEvents: this.state.events });
  }

  searchFeed(term) 
  {
    const { events } = this.state;
    let filteredEvents;

    if (term === "") 
    {
      filteredEvents = events;
    } 
    else if (term.startsWith("#")) 
    {
      filteredEvents = events.filter(event => event.description.includes(term));
    } 
    else 
    {
      filteredEvents = events.filter(event => event.name.toLowerCase().includes(term.toLowerCase()));
    }

    this.setState({ filteredEvents });
  }

  render() {
    return (
      <div>
        <h1>Events!</h1>
        <h2>Search</h2>
        <Search handleSearch={this.searchFeed} />
        <h2>Feed</h2>
        <EventFeed events={this.state.filteredEvents} />
      </div>
    );
  }
}
// render here
const root = ReactDOM.createRoot(document.getElementById("root"));
// complete this code
root.render(<App />);

// root.render(<Event name="Sample Eventsssss"
//   date="2024-08-26"
//   description="This is a description of the sample event."/>);
//root.render(<EventFeed events = {events}/>);
