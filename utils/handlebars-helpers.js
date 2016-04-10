Handlebars = require('handlebars');
function link(id, url, text) {
    var id = Handlebars.escapeExpression(id);
    var url = Handlebars.escapeExpression(url);
    return new Handlebars.SafeString(
        "<a href='"+ url + id + "'>" + text + "</a>"
    );
}
module.exports = {
    link: link
};
