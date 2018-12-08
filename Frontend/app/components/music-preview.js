import Component from '@ember/component';
import { inject as service } from '@ember/service'
import { Promise, resolve, reject } from 'rsvp';
export default Component.extend({
    spotify: service(),
    source: null,
    spotifyRecord: null,


    init(){
        this._super(...arguments);
        this.trackName = this.get('record').name;
        this.album = this.get('record').title;
        this.setSource();

    },

    setSource(){
        let track = this.get('spotify').getTrackSingle(this.get('trackName'))
        let album = this.get('album')
        
        track.then(track => {
            this.set('loading', true);
            this.set('spotifyRecordArray', track.tracks.items)
            
    
            for(var i = 0; i < this.get('spotifyRecordArray').length; i++) {
                if (this.get('spotifyRecordArray')[i].album.name.toLowerCase() === album.toLowerCase()) {
                    this.set('spotifyRecord', this.get('spotifyRecordArray')[i]);
                    break; 
                }
            }

            if(!this.get('spotifyRecordArray')[0]){
                this.set('loading', false)
                return
            }
            if(this.get('spotifyRecord')!=null){
                this.set('source', this.get('spotifyRecord').preview_url);
                
            }

            this.set('loading', false)
        })

    }
});
