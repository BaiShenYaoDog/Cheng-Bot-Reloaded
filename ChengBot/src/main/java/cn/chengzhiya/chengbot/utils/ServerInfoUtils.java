package cn.chengzhiya.chengbot.utils;

import cn.chengzhiya.chengbot.entity.ServerIP;
import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.JSONObject;

import javax.naming.directory.Attribute;
import javax.naming.directory.InitialDirContext;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.Hashtable;

public class ServerInfoUtils {
    public static JSONObject getServerInfo(String serverIPString) throws IOException {
        ServerIP serverIP = checkSRV(serverIPString);
        if (serverIP == null) {
            String[] IP = serverIPString.split(":");
            serverIP = new ServerIP(IP[0], IP.length == 1 ? 25565 : Integer.parseInt(IP[1]));
        }
        return getServerInfo(serverIP);
    }

    public static ServerIP checkSRV(String Address) {
        ServerIP ServerIP = new ServerIP(null, 25565);

        Hashtable<String, String> hashtable = new Hashtable<>();
        hashtable.put("java.naming.factory.initial", "com.sun.jndi.dns.DnsContextFactory");
        hashtable.put("java.naming.provider.url", "dns:");

        try {
            Attribute attribute = (new InitialDirContext(hashtable))
                    .getAttributes("_Minecraft._tcp." + Address,
                            new String[]{"SRV"})
                    .get("srv");
            if (attribute != null) {
                String[] re = attribute.get().toString().split(" ", 4);
                ServerIP.setIp(re[3].substring(0, re[3].length() - 1));
                ServerIP.setPort(Integer.parseInt(re[2]));

                return ServerIP;
            }
        } catch (Exception ignored) {
        }
        return null;
    }

    public static byte[] int2varint(int input) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        while (true) {
            if ((input & ~0x7F) == 0) {
                out.write(input);
                break;
            }

            out.write((input & 0x7F) | 0x80);
            input >>>= 7;
        }
        return out.toByteArray();
    }

    public static int readVarintFromStream(DataInputStream in) throws IOException {
        int value = 0;
        int length = 0;
        byte currentByte;

        do {
            currentByte = in.readByte();

            value |= (currentByte & 0x7F) << (length * 7);

            length += 1;
            if (length > 5) {
                throw new RuntimeException("VarInt is too big");
            }
        } while ((currentByte & 0x80) == 0x80);
        return value;
    }

    public static JSONObject getServerInfo(ServerIP serverIP) throws IOException {
        ByteArrayOutputStream bOut = new ByteArrayOutputStream();
        DataOutputStream out = new DataOutputStream(bOut);
        out.write(0x00);
        out.write(int2varint(755));
        out.write(int2varint("127.0.0.1".length()));
        out.writeBytes("127.0.0.1");
        out.writeShort(25565);
        out.write(int2varint(0x01));
        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress(serverIP.getIp(), serverIP.getPort()), 400);
            DataOutputStream sOut = new DataOutputStream(socket.getOutputStream());
            sOut.write(int2varint(bOut.size()));
            sOut.write(bOut.toByteArray());
            sOut.writeByte(0x01);
            sOut.writeByte(0x00);
            DataInputStream in = new DataInputStream(socket.getInputStream());
            readVarintFromStream(in);
            readVarintFromStream(in);
            int LENGTH = readVarintFromStream(in);
            byte[] data = new byte[LENGTH];
            in.readFully(data);
            return JSON.parseObject(new String(data, StandardCharsets.UTF_8));
        }
    }
}
