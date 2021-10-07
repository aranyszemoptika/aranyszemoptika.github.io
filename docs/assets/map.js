$(document).ready(function(){
    $('#mapModal').on('show.bs.modal', afterShown);

    // $('.mapsLink .link').on('click', function(){
    //     $('#mapModal').modal('show');
    // });
});

function afterShown(event){
    var button = $(event.relatedTarget); // Button that triggered the modal
    var url = button.data('url'); // Extract info from data-* attributes
    debugger;
    var modal = $(this);
    modal.find('.modal-body').html('<iframe src="'.concat(url, '"  height="450" style="border:0; width: 100%; height: 100%; min-height: 500px;" allowfullscreen="" loading="lazy"></iframe>'));
}