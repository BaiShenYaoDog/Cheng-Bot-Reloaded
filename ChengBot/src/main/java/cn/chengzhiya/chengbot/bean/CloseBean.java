package cn.chengzhiya.chengbot.bean;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.stereotype.Component;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.futureDriver;

@Component
public class CloseBean implements DisposableBean {
    @Override
    public void destroy() throws Exception {
        futureDriver.get().quit();
    }
}
