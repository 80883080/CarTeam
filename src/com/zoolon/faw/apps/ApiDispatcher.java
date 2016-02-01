package com.zoolon.faw.apps;


import com.jfinal.core.Controller;
import com.zoolon.faw.util.api.Api;
import com.zoolon.faw.util.api.Http;
import com.zoolon.faw.util.api.Result;
import net.sf.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class ApiDispatcher extends Controller {
    public void index() throws Exception {


        String token = Api.token("test", "123", "321");

        String url = "linePlan/routeline/json";
        Map<String, String> params = new HashMap<String, String>();
        //  params.put("userId", "test");
        //   params.put("planName", "test");
        //   params.put("planStartTime", "2016-01-01 01:00:00");


        params.put("tokenId", token);
        params.put("rows", "10");
        params.put("page", "1");
        String body = JSONObject.fromObject(params).toString();
        //String body = "{\"orgCode\":\"321\",\"enterpriseId\":\"123\",\"userId\":\"test\"}";

        Result ret = Http.post(url, body);


        this.renderText(ret.toString());

    }
}
