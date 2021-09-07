"use strict";

"require fs";
"require uci";
"require ui";

// @ts-ignore
return L.view.extend<[string, string]>({
  load: function () {
    return uci.load("xray").then(function () {
      let configFile = uci.get("xray", "main", "config_file");

      if (!configFile) {
        configFile = "/var/etc/xray/xray.main.json";
      }

      return Promise.all([
        Promise.resolve(configFile),
        L.resolveDefault(fs.read(configFile), ""),
      ]);
    });
  },
  render: function ([configFile = "", configContent = ""] = []) {
    return E([
      E("h2", "%s - %s".format(_("Xray"), _("About"))),
      E("p", _("LuCI support for Xray.")),
      E(
        "p",
        _("Version: %s").format(
          `${process.env.LUCI_VERSION}-${process.env.LUCI_RELEASE}`
        )
      ),
      E("p", _("Author: %s").format("Donald J. Trump")),
      E(
        "p",
        _("Source: %s").format(
          '<a href="https://github.com/kilofox/luci-app-xray" target="_blank">https://github.com/kilofox/luci-app-xray</a>'
        )
      ),
      E(
        "p",
        _("Latest: %s").format(
          '<a href="https://github.com/kilofox/luci-app-xray/releases/latest" target="_blank">https://github.com/kilofox/luci-app-xray/releases/latest</a>'
        )
      ),
      E(
        "p",
        _("Report Bugs: %s").format(
          '<a href="https://github.com/kilofox/luci-app-xray/issues" target="_blank">https://github.com/kilofox/luci-app-xray/issues</a>'
        )
      ),
      E("p", _("Current Config File: %s").format(configFile)),
      E(
        "pre",
        {
          style:
            "-moz-tab-size: 4;-o-tab-size: 4;tab-size: 4;word-break: break-all;",
        },
        configContent ? configContent : _("Failed to open file.")
      ),
    ]);
  },
  handleReset: null,
  handleSave: null,
  handleSaveApply: null,
});
