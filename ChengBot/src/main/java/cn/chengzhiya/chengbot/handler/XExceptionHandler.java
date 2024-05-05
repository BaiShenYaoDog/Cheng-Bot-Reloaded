package cn.chengzhiya.chengbot.handler;

import cn.chengzhiya.chengbot.controller.ABaseController;
import jakarta.servlet.http.HttpServletRequest;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.SocketException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.futureDriver;

@ControllerAdvice
public class XExceptionHandler extends ABaseController {


    @ExceptionHandler(Exception.class)
    @ResponseBody
    public Object AllExceptionHandler(Exception e, HttpServletRequest request) throws IOException, ExecutionException, InterruptedException {
        if (e instanceof UnknownHostException || e instanceof SocketException || e instanceof SocketTimeoutException) {
            return error("无法访问目标服务器!");
        }
        if (request.getRequestURI().startsWith("/getImage")) {
            WebDriver driver = futureDriver.get();

            driver.manage().window().setSize(new Dimension(1600, 900));
            StringBuilder URL = new StringBuilder(request.getRequestURL().toString().replaceAll("/getImage", ""));
            Map<String, String[]> map = request.getParameterMap();
            for (String key : map.keySet()) {
                if (key.equals(map.keySet().toArray()[0])) {
                    URL.append("?").append(key).append("=").append(map.get(key)[0]);
                }
            }
            driver.get(URL.toString());

            Thread.sleep(600);

            byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);

            return ResponseEntity
                    .ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(screenshot);
        }
        if (request.getRequestURI().startsWith("/assets")) {
            File HTMLFile = new File("./public" + request.getRequestURI());

            FileInputStream in = new FileInputStream(HTMLFile);
            byte[] imageByteArray = StreamUtils.copyToByteArray(in);

            return ResponseEntity
                    .ok()
                    .body(imageByteArray);
        }
        if (request.getRequestURI().startsWith("/api")) {
            e.printStackTrace();
            return error("找不到指定接口!");
        }
        File HTMLFile = new File("./public/index.html");

        FileInputStream in = new FileInputStream(HTMLFile);
        byte[] imageByteArray = StreamUtils.copyToByteArray(in);

        return ResponseEntity
                .ok()
                .contentType(MediaType.TEXT_HTML)
                .body(imageByteArray);
    }
}