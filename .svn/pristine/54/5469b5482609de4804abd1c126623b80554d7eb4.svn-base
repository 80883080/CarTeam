package com.zoolon.faw.util.api;


import com.jfinal.kit.PropKit;
import com.jfinal.log.Log;
import net.sf.json.JSONObject;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;

public class Http {

    private static Log logger = Log.getLog("http");
    private static String charset = "utf-8";

    public static Result post(String apiName, String body) {
        String host = PropKit.get("apihost");
        String api = host + apiName;

        logger.info("call api send body:" + api);
        logger.info(body);

        HttpPost httppost = makePost(api);
        httppost.setEntity(new StringEntity(body, charset));

        return execute(httppost);
    }

    private static HttpPost makePost(String url) {

        HttpPost httppost = new HttpPost(url);
        return httppost;
    }

    private static Result execute(HttpUriRequest request) {

        HttpClient httpclient = HttpClients.createDefault();
        try {
            request.addHeader("Content-Type", "application/json");
            request.addHeader("Connection", "close");

            HttpResponse response = httpclient.execute(request);
            StatusLine status = response.getStatusLine();

            if (status.getStatusCode() != 200) {
                return Result.neterr(new Exception(status.getReasonPhrase()));
            }

            HttpEntity responseEntity = response.getEntity();

            String result = "";


            InputStreamReader reader = new InputStreamReader(responseEntity.getContent(), charset);
            char[] buff = new char[1024];
            int length = 0;
            while ((length = reader.read(buff)) != -1) {
                result += new String(buff, 0, length);
            }
            logger.info(result);

            return Result.success(JSONObject.fromObject(result));

        } catch (UnsupportedEncodingException e) {
            return Result.err(e);
        } catch (ClientProtocolException e) {
            return Result.neterr(e);
        } catch (IOException e) {
            return Result.neterr(e);
        } catch (Exception e) {
            return Result.err(e);
        } finally {
            request.abort();
        }

    }
}
