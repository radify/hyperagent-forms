import Form from './form';
import {LazyResource} from 'hyperagent';

function LoadHook(object) {
  var forms = object._forms;
  if (!forms) {
    this.forms = {};
  } else {
    this.forms = new LazyResource(this, forms, {
      factory: Form.factory
    });
  }
}

export default LoadHook;
