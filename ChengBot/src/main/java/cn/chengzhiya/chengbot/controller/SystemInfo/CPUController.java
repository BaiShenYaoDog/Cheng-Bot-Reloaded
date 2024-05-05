package cn.chengzhiya.chengbot.controller.SystemInfo;

import cn.chengzhiya.chengbot.controller.ABaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.*;

@RestController
@RequestMapping("/api/SystemInfo/cpu")
public class CPUController extends ABaseController {
    @GetMapping("/")
    public response get() {
        return success(Arrays.asList("getName", "getUsage", "getSpeed", "getBit", "getCores", "getThreads"));
    }

    @GetMapping("/getName")
    public response GetCPUName() {
        return success(getCPUName());
    }

    @GetMapping("/getUsage")
    public response GetCPUUsage() {
        return success(getCPUUsage());
    }

    @GetMapping("/getSpeed")
    public response GetCPUSpeed() {
        return success(getCPUSpeed());
    }

    @GetMapping("/getBit")
    public response GetCPUBit() {
        return success(getCPUBit());
    }

    @GetMapping("/getCores")
    public response GetCPUCores() {
        return success(getCPUCores());
    }

    @GetMapping("/getThreads")
    public response GetCPUThreads() {
        return success(getCPUThreads());
    }
}
