import DS from 'ember-data';

export default DS.Model.extend({
    Name: DS.attr(),
    Albums: DS.hasMany('album')
});