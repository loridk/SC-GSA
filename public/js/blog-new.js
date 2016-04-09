$('#newBlogPost').submit(function() {

    event.preventDefault();
    $('#content').val($('#editable').html());

    var data = {
        "title": $('#title').val(),
        "content": $('#content').val()
    };
    //data.title = $('#title').val();
    //data.content = $('#content').val();

    JSON.stringify(data);

    console.log('data ',data);

    $.ajax({
        type: 'POST',
        url: '/blog/create',
        data: data,
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            console.log('success');
            console.log(data);
        },
        error: function(error) {
            console.log('error');
            console.log(error);
        }
    });

});