import { compose } from 'recompose'
import {withRouter} from 'react-router'
import { withFirebase } from 'react-redux-firebase'

const DependenciesContainer = Component => {
  return compose(withFirebase, withRouter)(Component)
}

export default DependenciesContainer
