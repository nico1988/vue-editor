(function () {
    var list;
    var datas = window.top.datas;
    // 默认引用tochui框架样式  xiams
    datas.HtmlHeadStuff = `<link rel="stylesheet" href="https://unpkg.com/touchui2.0@1.0.0/css/base.css">
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/jcl-base.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/jcl.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/i18n/code.zh_CN.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/jcl-plugins.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/jcl-ui.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/ui/component/base/popup.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/ui/component/base/segment.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/ui/component/base/switch.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/ui/component/base/datefield.js"></script>
    <script type="text/javascript" src="https://unpkg.com/touchui2.0@1.0.0/js/ui/component/calendar/calendar.js"></script>`
    var editorData = window.top.eidtorDatas;
    var cssBases = [
        "",
        "https://necolas.github.io/normalize.css/7.0.0/normalize.css",
        "http://meyerweb.com/eric/tools/css/reset/reset200802.css"
    ];
    if (datas.HtmlClassName) {
        document.getElementsByTagName("html")[0].className = datas.HtmlClassName;
    }
    if (datas.HtmlHeadStuff) {
        document.write(datas.HtmlHeadStuff);
    }
    if (datas.cssBase && cssBase[datas.cssBase]) {
        document.write("<link href=\"" + cssBases[datas.cssBase] + "\" rel=\"stylesheet\" />");
    }
    document.write(" <style id=\"vscss\" type=\"text/css\">" + editorData.Css + "</style>");
    if (datas.CssExternal) {
        list = datas.CssExternal.split("\n");
        for (var i = 0; i < list.length; i++) {
            document.write("<link href=\"" + list[i] + "\" rel=\"stylesheet\" />");
        }
    }

    if (datas.JsExternal) {
        list = datas.JsExternal.split("\n");
        for (var i = 0; i < list.length; i++) {
            document.write("<script src=\"" + list[i] + "\" type=\"text/javascript\" ><\/script>");
        }

    }

}());