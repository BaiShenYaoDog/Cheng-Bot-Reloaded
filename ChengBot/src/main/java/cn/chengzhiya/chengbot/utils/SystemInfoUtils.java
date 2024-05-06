package cn.chengzhiya.chengbot.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSFileStore;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class SystemInfoUtils {
    public static SystemInfo systemInfo = new SystemInfo();
    public static OperatingSystem os = systemInfo.getOperatingSystem();
    public static List<OSFileStore> disks = os.getFileSystem().getFileStores();
    public static HardwareAbstractionLayer hardware = systemInfo.getHardware();
    public static CentralProcessor cpu = hardware.getProcessor();
    public static Integer CPUUsage = null;
    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static Future<WebDriver> futureDriver = executor.submit(() -> {
        EdgeOptions options = new EdgeOptions();
        options.addArguments("--headless");
        return new EdgeDriver(options);
    });

    //CPU
    public static String getCPUName() {
        return cpu.getProcessorIdentifier().getName();
    }

    public static void updateCPUUsage() {
        CPUUsage = (int) (cpu.getSystemCpuLoad(1000) * 100);
        if (CPUUsage > 100) {
            CPUUsage = 100;
        }
    }

    public static int getCPUUsage() {
        if (CPUUsage == null) {
            updateCPUUsage();
        }
        return CPUUsage;
    }

    public static String getCPUSpeed() {
        return String.format("%.2f", cpu.getMaxFreq() / 1.0e9) + " GHz";
    }

    public static String getCPUBit() {
        return systemInfo.getOperatingSystem().getBitness() + "位";
    }

    public static int getCPUCores() {
        return cpu.getPhysicalProcessorCount();
    }

    public static int getCPUThreads() {
        return cpu.getLogicalProcessorCount();
    }

    //物理内存
    public static int getRAMUsage() {
        return (int) ((systemInfo.getHardware().getMemory().getTotal() - systemInfo.getHardware().getMemory().getAvailable()) * 1.0 / systemInfo.getHardware().getMemory().getTotal() * 100);
    }

    public static String getRAMTotal() {
        return FormatUtil.formatBytes(systemInfo.getHardware().getMemory().getTotal());
    }

    public static String getRAMUse() {
        return FormatUtil.formatBytes(systemInfo.getHardware().getMemory().getTotal() - systemInfo.getHardware().getMemory().getAvailable());
    }

    public static String getRAMFree() {
        return FormatUtil.formatBytes(systemInfo.getHardware().getMemory().getAvailable());
    }

    //虚拟内存
    public static int getPRAMUsage() {
        return (int) (systemInfo.getHardware().getMemory().getVirtualMemory().getSwapUsed() * 1.0 / systemInfo.getHardware().getMemory().getVirtualMemory().getSwapTotal() * 100);
    }

    public static String getPRAMTotal() {
        return FormatUtil.formatBytes(systemInfo.getHardware().getMemory().getVirtualMemory().getSwapTotal());
    }

    public static String getPRAMUse() {
        return FormatUtil.formatBytes(systemInfo.getHardware().getMemory().getVirtualMemory().getSwapUsed());
    }

    public static String getPRAMFree() {
        return FormatUtil.formatBytes(systemInfo.getHardware().getMemory().getVirtualMemory().getSwapTotal() - systemInfo.getHardware().getMemory().getVirtualMemory().getSwapUsed());
    }

    //系统
    public static String getSystemName() {
        return SystemInfo.getCurrentPlatform().getName();
    }

    //磁盘
    public static int getDISKUsage() {
        long DisksTotal = 0;
        long DisksUse = 0;
        for (OSFileStore disk : disks) {
            DisksTotal = DisksTotal + disk.getTotalSpace();
            DisksUse = DisksUse + (disk.getTotalSpace() - disk.getUsableSpace());
        }
        return (int) (DisksUse * 1.0 / DisksTotal * 100);
    }

    public static String getDISKTotal() {
        long DisksTotal = 0;
        for (OSFileStore disk : disks) {
            DisksTotal = DisksTotal + disk.getTotalSpace();
        }
        return FormatUtil.formatBytes(DisksTotal);
    }

    public static String getDISKUse() {
        long DisksUse = 0;
        for (OSFileStore disk : disks) {
            DisksUse = DisksUse + (disk.getTotalSpace() - disk.getUsableSpace());
        }
        return FormatUtil.formatBytes(DisksUse);
    }

    public static String getDISKFree() {
        long DisksFree = 0;
        for (OSFileStore disk : disks) {
            DisksFree = DisksFree + disk.getUsableSpace();
        }
        return FormatUtil.formatBytes(DisksFree);
    }
}
