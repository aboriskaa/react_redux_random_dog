
import './App.css';

function App() {
  return (
    <div>
      <button onClick={() => fetchDog(this.props.dispatch)}>Show Dog</button>
      {this.props.loading
        ? <p>Loading...</p>
        : this.props.error
          ? <p>Error, try again</p>
          : <p><img src={this.props.url} /></p>}
    </div>
  );
}

export default App;
