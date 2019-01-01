let Controller = {
    getData: function() {
        let data = Model.getData()
        View.outputData( data )
    },

    setData: function() {
        let data = View.inputData()
        let saved = Model.setData( data )
        
		if ( saved )
            alert('Data Saved')
    },

    bindEvents: function() {
        $('#get').on('click', this.getData)
        $('#set').on('click', this.setData)
        $(document).ready( this.getData )
    }
}

Controller.bindEvents()