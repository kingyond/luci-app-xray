"use strict";"require form";return L.view.extend({render:function(){var e=new form.Map("xray","%s - %s".format(_("Xray"),_("Reverse")),_("Details: %s").format('<a href="https://xtls.github.io/config/reverse.html#reverseobject" target="_blank">ReverseObject</a>')),r=e.section(form.NamedSection,"main_reverse","reverse");return r.addremove=!1,r.option(form.Flag,"enabled",_("Enabled")).rmempty=!1,r.option(form.DynamicList,"bridges",_("Bridges"),_("A list of bridges, format: <code>tag|domain</code>. eg: %s").format("bridge|test.xray.com")),r.option(form.DynamicList,"portals",_("Portals"),_("A list of portals, format: <code>tag|domain</code>. eg: %s").format("portal|test.xray.com")),e.render()}});