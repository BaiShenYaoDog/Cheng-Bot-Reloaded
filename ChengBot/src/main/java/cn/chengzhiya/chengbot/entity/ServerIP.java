package cn.chengzhiya.chengbot.entity;

import lombok.Data;

@Data
public class ServerIP {
    public String ip;
    public Integer port;

    public ServerIP(String ip, Integer port) {
        this.ip = ip;
        this.port = port;
    }
}
