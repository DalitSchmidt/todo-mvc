let View = {
    resetInput: function() {
        $('#new-item').val('')
    },

    /**
     * @returns {jQuery}
     */
    getItemFromInput: function() {
        let item = $('#new-item').val()
        
		this.resetInput()
        
		return item
    },

    /**
     * @param list
     */
    setList: function( list ) {
        let html = ''
        
		for ( let i = 0; i < list.length; i++ )
            html += `<li>${list[ i ]}</li>`

        $('#list').append( html )
    },

    /**
     * @param item
     */
    addItem: function( item ) {
        $('#list').append(`<li>${item}</li>`)
    }
}