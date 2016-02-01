package com.zoolon.faw.util.api;


import net.sf.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class Api {
    public static String token(String userId, String enterpriseId, String orgCode) {

        String url = "login/verify/registered";
        Map<String, String> params = new HashMap<String, String>();
        params.put("userId", userId);
        params.put("enterpriseId", enterpriseId);
        params.put("orgCode", orgCode);
        String body = JSONObject.fromObject(params).toString();
        //String body = "{\"orgCode\":\"321\",\"enterpriseId\":\"123\",\"userId\":\"test\"}";

        Result ret = Http.post(url, body);

        if (ret.isSuccess()) {
            JSONObject obj = (JSONObject) ret.getResult();
            return obj.get("tokenId") + "";
        }

        return null;

    }
}
