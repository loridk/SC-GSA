var Handlebars = require('handlebars');
var moment = require('moment');
var paginate = require('handlebars-paginate');

function link(id, url, text) {
    var id = Handlebars.escapeExpression(id);
    var url = Handlebars.escapeExpression(url);
    return new Handlebars.SafeString(
        "<a href='"+ url + id + "'>" + text + "</a>"
    );
}

function dateFormat(date) {
    return moment(date).format('MMMM do YYYY');
}

function paginate(pagination) {
    return paginate(pagination, options);
}

function truncatePost(content, id) {
    if (content.length > 300) {
        var link = new Handlebars.SafeString("<a href='"+"/blog/"+id+"'>read more</a>.");
        return content.substring(0, 299)+"... "+link;
    } else {
        return content;
    }
}

module.exports = {
    link: link,
    dateFormat: dateFormat,
    paginate: paginate,
    truncatePost: truncatePost
};
