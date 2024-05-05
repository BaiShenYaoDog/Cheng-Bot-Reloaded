package cn.chengzhiya.chengbot;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.concurrent.ExecutionException;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.updateCPUUsage;

@SpringBootApplication
@EnableScheduling
public class ChengBot {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        WebDriverManager.edgedriver().setup();

        updateCPUUsage();

        SpringApplication.run(ChengBot.class, args);
    }

    @Scheduled(cron = "* * * * * ?")
    public void UpdateCPUUsage() {
        updateCPUUsage();
    }
}
