import * as  UserActionCreators from './user'
import * as  MovieActionCreators from './movies'

export default {
    ...MovieActionCreators,
    ...UserActionCreators
}
