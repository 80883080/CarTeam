var Api = {};

//班线管理
Api.call = function (callback) {

    var self = this;

    var url = "/ad";
    var params = {};
    params.api = self.api;
    params.body = self.body;
    if (self.params) {
        for (var key in self.params) {
            params[key] = self.params[key];
        }
    }
    console.log(params);

    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(params),
        success: function (data) {
            console.log(data);
        }
    });
}

Api.push = function (key, value, type) {
    var self = this;

    type = type ? type : "body";

    var p = self.body;
    if (type == "params") {
        p = self.params;
    }

    p[key] = value;

}

//Api
Api.commands = {};

//班线***************
//查询
Api.commands["route.list"] = {
    api: "linePlan/routeline/json", body: {}
};
//返程
Api.commands["route.back"] = {
    api: "linePlan/routeline/json", body: {}
};
//任务（班线计划）***************
//查询
Api.commands["line.list"] = {
    api: "api/linePlan/json", body: {}
};

//站点***************
//查询
Api.commands["station.list"] = {
    api: "linePlan/station/json", body: {}
};

for (var api in Api.commands) {
    Api.commands[api].call = Api.call;
    Api.commands[api].push = Api.push;
}
