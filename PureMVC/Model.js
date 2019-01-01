let Model = {
    getData: function() {
        return localStorage.getItem('cell')
    },

    /**
     * @param data
     * @returns {boolean}
     */
    setData: function( data ) {
        localStorage.setItem('cell', data)
		
        return true
    }
}