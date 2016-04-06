$('#newBlogPost').submit(function() {
    'use strict';
    event.preventDefault();
    $('#content').val($('#editable').html());

    var data = {
        "title": $('#title').val(),
        "content": $('#content').val()
    };
    //data.title = $('#title').val();
    //data.content = $('#content').val();



    console.log('data ',data);

    $.ajax({
        type: 'POST',
        url: '/blog/create',
        data: data,
        contentType: 'application/json',
        success: function(data) {
            console.log('success');
            console.log(data);
        }
    });

});