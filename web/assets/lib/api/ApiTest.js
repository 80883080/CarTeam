$(document).ready(function () {
    $("button").click(function () {

        var api = $(this).data("api");
        var body = $(this).data("body");
        console.log(api);
        var command = Api.commands[api];

        if (body) {
            console.log(body)
            command.body = body;
        }

        command.call();

    })
});