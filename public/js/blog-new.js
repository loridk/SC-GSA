$('#newBlogPost').submit(function() {
    'use strict';
    event.preventDefault();
    $('#content').val($('#editable').html());

    var data = {};
    data.title = $('#title').val();
    data.content = $('#content').val();
    JSON.stringify(data);


    console.log('data ',data);

    $.ajax({
        type: 'POST',
        url: '/blog/create',
        data: data,
        contentType: 'application/json'
    })
        .done(function(data) {
            console.log('done ', data);
        })
        .fail(function(data) {
            console.log('fail ', data);
        });

});