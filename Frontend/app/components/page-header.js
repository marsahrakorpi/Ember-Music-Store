import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),
    actions:{
        transitionTo(route){
            this.get('router').transitionTo(route);
        }
    }
});
