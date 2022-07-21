import { connect } from 'react-redux';
import { fetchDog } from '../reducers/dogs_reducer'

function Dog({ dogsReducer, dispatch }) {
    console.log(dogsReducer.url)

    return (
        <div>
            <button onClick={() => fetchDog(dispatch)}>Show Dog</button>
            {
                dogsReducer.loading
                    ? <p>Loading...</p>
                    : dogsReducer.error
                        ? <p>Error, try again</p>
                        : <p><img alt={dogsReducer.url} src={dogsReducer.url} /></p>
            }
        </div >
    );
}

function mapStateToProps(state) {
    console.log(state);
    return state;
};


export default connect(mapStateToProps)(Dog);