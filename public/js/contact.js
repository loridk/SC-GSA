function closeAccord(item){
    $(item).collapse("hide");
}
function validateCheckbox() {
    if ($('#checkbox1').is(':checked')) {

        $('#name').removeAttr('required');
    }
    else {

        $('#name').attr('required');
        $('#name').prop('required', true);
    }

}

function validate() {
    if ($('#checkbox1').is(':checked')) {
        $('#name').removeAttr('required');
    }
    else {
        $('#name').prop('required', true);
        $('#form').validate();
    }
}