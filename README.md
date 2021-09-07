# luci-app-xray

Luci support for Xray

[![Release Version](https://img.shields.io/github/release/kilofox/luci-app-xray.svg)](https://github.com/kilofox/luci-app-xray/releases/latest) [![Latest Release Download](https://img.shields.io/github/downloads/kilofox/luci-app-xray/latest/total.svg)](https://github.com/kilofox/luci-app-xray/releases/latest) [![Total Download](https://img.shields.io/github/downloads/kilofox/luci-app-xray/total.svg)](https://github.com/kilofox/luci-app-xray/releases)

## Install

1. Download ipk files from [release](https://github.com/kilofox/luci-app-xray/releases) page

2. Upload files to your router

3. Install package with opkg:

```sh
opkg install luci-app-xray_*.ipk
```

Dependencies:

- jshn
- ip (ip-tiny or ip-full)
- ipset
- iptables
- iptables-mod-tproxy
- resolveip
- dnsmasq-full (dnsmasq ipset is required)

For translations, please install ```luci-i18n-xray-*```.

> You may need to remove ```dnsmasq``` before installing this package.

## Configure

1. Download Xray file from Xray release [link](https://github.com/xray/xray-core/releases) or Xray ipk release [link](https://github.com/kilofox/openwrt-xray/releases).

2. Upload Xray file to your router, or install the ipk file.

3. Config Xray file path in LuCI page.

4. Add your inbound and outbound rules.

5. Enable the service via LuCI.

## Build

Package files is in branch [luci](https://github.com/kilofox/luci-app-xray/tree/luci)

Download with Git:

```sh
git clone -b luci https://github.com/kilofox/luci-app-xray.git luci-app-xray
```
