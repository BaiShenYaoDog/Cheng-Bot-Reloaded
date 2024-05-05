package cn.chengzhiya.chengbot.controller.SystemInfo;

import cn.chengzhiya.chengbot.controller.ABaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.getSystemName;

@RestController
@RequestMapping("/api/SystemInfo/system")
public class SystemController extends ABaseController {
    @GetMapping("/")
    public response get() {
        return success(Arrays.asList("getName"));
    }

    @GetMapping("/getName")
    public response GetSystemName() {
        return success(getSystemName());
    }
}
