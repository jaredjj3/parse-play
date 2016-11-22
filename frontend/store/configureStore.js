import { createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';
import RootMiddleware from '../middleware/RootMiddleware';

export default () => {
  return (
    createStore(
      RootReducer,
      RootMiddleware
    )
  );
};