import { applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const mw = applyMiddleware(thunk, logger);
export default  mw 