type SectionItem = {
  caption: string;
  value: string;
};

type CustomTextValueProperties = {
  filepath: string | null;
  isjson: boolean;
  required: boolean;
};

type Vless = {
  v: string;
  ps: string;
  add: string;
  port: string;
  id: string;
  aid: string;
  net: "tcp" | "kcp" | "mkcp" | "ws" | "http" | "h2" | "quic";
  type: "none" | "http" | "srtp" | "utp" | "wechat-video";
  host: string;
  path: string;
  tls: string;
};

interface Custom extends LuCI.baseclass {
  TextValue: form.TextValue & CustomTextValueProperties;
  RunningStatus: form.AbstractValue;
}

interface Xray extends LuCI.baseclass {
  getLocalIPs(): Promise<string[]>;
  getSections(type: string): Promise<SectionItem[]>;
  getDokodemoDoorPorts(): Promise<SectionItem[]>;
}

interface Base64 extends LuCI.baseclass {
  encode(str: string): string;
  decode(str: string): string;
}

interface Converters extends LuCI.baseclass {
  extractGFWList(gfwlist: string): string;
  extractCHNRoute(delegatedlist: string, ipv6?: boolean): string;
  vmessLinkToVless(link: string): Vless | null;
}

declare const base64: Base64;
declare const converters: Converters;
declare const custom: Custom;
declare const xray: Xray;
