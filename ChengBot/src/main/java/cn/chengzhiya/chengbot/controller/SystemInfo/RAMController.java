package cn.chengzhiya.chengbot.controller.SystemInfo;

import cn.chengzhiya.chengbot.controller.ABaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.*;

@RestController
@RequestMapping("/api/SystemInfo/ram")
public class RAMController extends ABaseController {
    @GetMapping("/")
    public response get() {
        return success(Arrays.asList("getUsage", "getTotal", "getUse", "getFree"));
    }

    @GetMapping("/getUsage")
    public response GetRAMUsage() {
        return success(getRAMUsage());
    }

    @GetMapping("/getTotal")
    public response GetRAMTotal() {
        return success(getRAMTotal());
    }

    @GetMapping("/getUse")
    public response GetUse() {
        return success(getRAMUse());
    }

    @GetMapping("/getFree")
    public response GetRAMFree() {
        return success(getRAMFree());
    }
}
