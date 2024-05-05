package cn.chengzhiya.chengbot.controller.ServerInfo;

import cn.chengzhiya.chengbot.controller.ABaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

import static cn.chengzhiya.chengbot.utils.ServerInfoUtils.getServerInfo;

@RestController
@RequestMapping("/api/ServerInfo")
public class ServerInfoController extends ABaseController {
    @GetMapping("/get")
    public response getSystemInfo(String server) throws IOException {
        if (server != null) {
            return success(getServerInfo(server));
        } else {
            return error("参数错误!");
        }
    }
}
