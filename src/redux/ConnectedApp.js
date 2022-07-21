const store = createStore(reducer);

const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
})(App);