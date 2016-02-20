package com.zoolon.faw.apps;

import com.jfinal.core.Controller;


public class App extends Controller {
    public void index() throws Exception {
        this.render("index.html");
    }

    public void login() throws Exception {
        this.render("apps/workset.html");
    }
}
