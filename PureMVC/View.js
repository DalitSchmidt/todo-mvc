let View = {
    /**
     * @param data
     */
    outputData: function( data ) {
        $('#textarea').val( data )
    },
    
	inputData: function() {
        return $('#textarea').val()
    }
}