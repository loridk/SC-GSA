$('#newBlogPost').submit(function() {

    event.preventDefault();
    $('#content').val($('#editable').html());

    var data = {};
        //new FormData();
    //data.append('title', $('#title').val());
    //data.append('content', $('#content').val());
    data.title = $('#title').val();
    data.content = $('#content').val();

    JSON.stringify(data);

    console.log('data ',data);

    jQuery.post(
        '/blog/create',
        data,
        function(data) {
            window.location = '/blog';
        },
        'json'
    );

    //$.ajax({
    //    type: 'POST',
    //    url: '/blog/create',
    //    data: data,
    //    contentType: 'application/json',
    //    dataType: 'json',
    //    success: function(data) {
    //        console.log('success');
    //        console.log(data);
    //    },
    //    error: function(error) {
    //        console.log('error');
    //        console.log(error);
    //    }
    //});

});