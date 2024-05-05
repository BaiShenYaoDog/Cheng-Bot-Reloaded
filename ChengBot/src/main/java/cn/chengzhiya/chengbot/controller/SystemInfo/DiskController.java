package cn.chengzhiya.chengbot.controller.SystemInfo;

import cn.chengzhiya.chengbot.controller.ABaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.*;

@RestController
@RequestMapping("/api/SystemInfo/disk")
public class DiskController extends ABaseController {
    @GetMapping("/")
    public response get() {
        return success(Arrays.asList("getUsage", "getTotal", "getUse", "getFree"));
    }

    @GetMapping("/getUsage")
    public response GetDiskUsage() {
        return success(getDISKUsage());
    }

    @GetMapping("/getTotal")
    public response GetDiskTotal() {
        return success(getDISKTotal());
    }

    @GetMapping("/getUse")
    public response GetDiskUse() {
        return success(getDISKUse());
    }

    @GetMapping("/getFree")
    public response GetDiskFree() {
        return success(getDISKFree());
    }
}
