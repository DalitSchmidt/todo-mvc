let Controller = {
    addItem: function() {
        let item = View.getItemFromInput()
        Model.addItem( item )
        View.addItem( item )
    },

    refreshList: function() {
        let list = Model.getData()
        View.setList( list )
    },

    bindEvents: function() {
        $('#add').on('click', this.addItem)
        $(document).ready( this.refreshList )
    }
}

Controller.bindEvents()