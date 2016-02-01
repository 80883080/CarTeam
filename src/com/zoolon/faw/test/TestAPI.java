package com.zoolon.faw.test;


import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;

import java.io.InputStreamReader;


public class TestAPI {
    public static void main(String args[]) {


        String host = "http://123.56.186.222:8080/fawfleet/api/";
        String api = host + "linePlan/station/json";
        api = "http://123.56.186.222:8080/fawfleet/api/login/verify/registered";
        String charset = "utf-8";

        HttpClient httpclient =  HttpClients.createDefault();
        HttpPost httppost = new HttpPost(api);
        try {

            String entity = "{\"orgCode\":\"321\",\"enterpriseId\":\"123\",\"userId\":\"test\"}";

            StringEntity myEntity = new StringEntity(entity, charset);
            httppost.addHeader("Content-Type", "application/json");
            httppost.setEntity(myEntity);
            HttpResponse response = httpclient.execute(httppost);
            HttpEntity resEntity = response.getEntity();
            InputStreamReader reader = new InputStreamReader(resEntity.getContent(), charset);
            char[] buff = new char[1024];
            int length = 0;
            while ((length = reader.read(buff)) != -1) {
                System.out.println(new String(buff, 0, length));
            }


        } catch (Exception e) {
            System.out.println("执行HTTP Post请求" + api + "时，发生异常！");
            e.printStackTrace();
        } finally {
            httppost.releaseConnection();
        }


    }
}
