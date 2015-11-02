import flux from 'dispatcher/control';
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class DummyActions {
    constructor(props) {
        this.generateActions('updateName');
    }
}

export default DummyActions;