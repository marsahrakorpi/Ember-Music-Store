import Component from '@ember/component';
import SemanticUiTheme from 'EmberMusic/themes/semanticui';
import { inject as service } from '@ember/service';

export default Component.extend({
    api: service(),
    session: service(),
    themeInstance: SemanticUiTheme.extend({table: 'ui sortable selectable table'}).create(),
    loading: false,
    columns: null,
    pageSizeValues: null,
    data: null,

    init(){
        this._super(...arguments);
        //{propertyName: "id", title:"#"},
        this.columns = [
            {propertyName: 'name', title:"Name"},
            {propertyName: 'album.title', title:"Album"},
            {propertyName: 'artist.name', title:"Artist"},
            {propertyName: 'length', tile:"Length", value: length},
            {propertyName: 'unitPrice', title:"Price"},
            {component: 'music-preview', title:"Preview"},
        ];
        if(this.get('session').isAuthenticated && this.get('session.data.authenticated.user').firstObject.userlevel === 5){
            this.get('columns').push({component: 'edit-track-row', title:"Edit"})
            this.get('columns').push({component: 'delete-track-row', title:"Remove"})
        }
        this.pageSizeValues = [10, 25, 50, 100, 200];

    },

    actions: {
        transitionTo(){
            this.transitionToRoute('/') 
        }
    }


});
