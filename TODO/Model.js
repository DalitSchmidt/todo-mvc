let Model = {
    data: [],

    /**
     * @returns {*}
     */
    getData: function() {
        let data = localStorage.getItem('data')
        
		if ( data !== null )
            return this.data = JSON.parse( data )
        else
            return this.data = []
    },

    save: function() {
        localStorage.setItem('data', JSON.stringify(this.data))
    },

    /**
     * @param item
     */
    addItem: function( item ) {
        this.data.push( item )
        this.save()
    },

    /**
     * @param item
     */
    removeItem: function( item ) {
        this.data.splice(this.data.indexOf(item), 1)
        this.save()
    }
}