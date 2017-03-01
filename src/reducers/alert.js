import {GET_MODELS_REJECTED} from '../actions'
import {REMOVE_ABKARI_RANG_REJECTED} from '../actions/abkariRangs'
import Alert from 'react-s-alert';

export default(state = 0, action) => {
  switch (action.type) {
    case GET_MODELS_REJECTED:
    case REMOVE_ABKARI_RANG_REJECTED:
      Alert.warning(action.payload.response.body.message, {timeout: 3000});
      break;
    default:
  }
  return state;
}
