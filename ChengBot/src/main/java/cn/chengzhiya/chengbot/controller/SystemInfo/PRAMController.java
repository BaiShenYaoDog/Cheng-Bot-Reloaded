package cn.chengzhiya.chengbot.controller.SystemInfo;

import cn.chengzhiya.chengbot.controller.ABaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.*;

@RestController
@RequestMapping("/api/SystemInfo/pram")
public class PRAMController extends ABaseController {
    @GetMapping("/")
    public response get() {
        return success(Arrays.asList("getUsage", "getTotal", "getUse", "getFree"));
    }

    @GetMapping("/getUsage")
    public response GetPRAMUsage() {
        return success(getPRAMUsage());
    }

    @GetMapping("/getTotal")
    public response GetPRAMTotal() {
        return success(getPRAMTotal());
    }

    @GetMapping("/getUse")
    public response GetPRAMUse() {
        return success(getPRAMUse());
    }

    @GetMapping("/getFree")
    public response GetPRAMFree() {
        return success(getPRAMFree());
    }
}
