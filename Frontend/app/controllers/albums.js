import Controller from '@ember/controller';
import SemanticUiTheme from '../themes/semanticui';

import { inject as service } from '@ember/service'
export default Controller.extend({
    jemapi: service(),

    themeInstance: SemanticUiTheme.create(),
    loading: false,
    columns: null,

    init(){
        this._super(...arguments);
        this.set('loading', true)
        this.columns = [
            {component: 'expand-row', disableFiltering: true, mayBeHidden: false},
            {propertyName: 'id', sortedBy: 'idNumeric'},
            {propertyName: 'title'},
            {propertyName: 'name'},

            /*
            {component: 'expand-row', disableFiltering: true, mayBeHidden: false},
            {propertyName: 'id', sortedBy: 'idNumeric'},
            {propertyName: 'name'},
            {propertyName: 'colors'},
            {propertyName: 'combat-specialty'}
            */
        ];

        this.set('loading', false);
    },

    actions: {
        transitionTo(){
            this.transitionToRoute('/') 
        }
    }


});