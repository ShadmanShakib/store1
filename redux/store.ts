import {createStore} from 'redux';
import rootReducer from './rootReducer'
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

// create a makeStore function
const makeStore: MakeStore= (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});