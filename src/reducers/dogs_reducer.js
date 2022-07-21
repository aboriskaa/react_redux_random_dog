const initialState = {
  url: '',
  loading: false,
  error: false,
};
export const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_DOG':
      return {
        url: '',
        loading: true,
        error: false,
      };
    case 'REQUESTED_DOG_SUCCEEDED':
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    case 'REQUESTED_DOG_FAILED':
      return {
        url: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const requestDog = () => {
  return { type: 'REQUESTED_DOG' }
};

export const requestDogSuccess = (data) => {
  return { type: 'REQUESTED_DOG_SUCCEEDED', url: data.message }
};

export const requestDogError = () => {
  return { type: 'REQUESTED_DOG_FAILED' }
};

export const fetchDog = (dispatch) => {
  dispatch(requestDog());
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(
      data => dispatch(requestDogSuccess(data)),
      err => dispatch(requestDogError())
    );
};
