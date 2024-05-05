package cn.chengzhiya.chengbot.controller.SystemInfo;

import cn.chengzhiya.chengbot.controller.ABaseController;
import com.alibaba.fastjson2.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static cn.chengzhiya.chengbot.utils.SystemInfoUtils.*;

@RestController
@RequestMapping("/api/SystemInfo")
public class SystemInfoController extends ABaseController {
    @GetMapping("/get")
    public response getSystemInfo() {
        JSONObject Data = new JSONObject();

        {
            JSONObject CPU = new JSONObject();
            CPU.put("name", getCPUName());
            CPU.put("usage", getCPUUsage());
            CPU.put("speed", getCPUSpeed());
            CPU.put("bit", getCPUBit());
            CPU.put("cores", getCPUCores());
            CPU.put("threads", getCPUThreads());
            Data.put("cpu", CPU);
        }

        {
            JSONObject RAM = new JSONObject();
            RAM.put("usage", getRAMUsage());
            RAM.put("total", getRAMTotal());
            RAM.put("use", getRAMUse());
            RAM.put("free", getRAMFree());
            Data.put("ram", RAM);
        }

        {
            JSONObject PRAM = new JSONObject();
            PRAM.put("usage", getPRAMUsage());
            PRAM.put("total", getPRAMTotal());
            PRAM.put("use", getPRAMUse());
            PRAM.put("free", getPRAMFree());
            Data.put("pram", PRAM);
        }

        {
            JSONObject System = new JSONObject();
            System.put("name", getSystemName());
            Data.put("system", System);
        }

        {
            JSONObject DISK = new JSONObject();
            DISK.put("usage", getDISKUsage());
            DISK.put("total", getDISKTotal());
            DISK.put("use", getDISKUse());
            DISK.put("free", getDISKFree());
            Data.put("disk", DISK);
        }

        return success(Data);
    }
}
