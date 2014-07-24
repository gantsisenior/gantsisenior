$(document).ready(function ()
{
    var cntHT_Link = $(".cntAutoHelpLink").find("a[href*='results']");
    var currentUrl = window.location.href;
   
    var GetAssetId = function ()
    {
        gAssetId = $("meta[name='DCSext.oo_assetid']").attr("content");

        //If the META tag is missing then grep the AssetId from the URL.
        if (gAssetId == null)
        {
            gAssetId = OOUtil.GetParamsFromUrl(currentUrl).AssetId;
        }

        return gAssetId;
    }

    var GetLocalPath = function (uri)
    {
        var pos = uri.indexOf("/", 8);
        var _path = pos != -1 ? uri.substr(pos) : (uri.indexOf("http") === -1 ? uri : "");
        return _path;

    };
    var GetHostName = function (uri)
    {
        var pos = uri.indexOf("/", 8);
        var _host = uri != -1 ? uri.substr(0, pos) : "";
        if (_host.toLowerCase().indexOf("https://") != -1)
        {
            _host = _host.substring(8);
        }
        else if (_host.toLowerCase().indexOf("http://") != -1)
        {
            _host = _host.substring(7);
        }
        if (_host === "")
            _host = location.host;

        return _host;
    };
    var GetQueryString = function (uri)
    {
        var queryPos = uri.indexOf("?") != -1 ? uri.indexOf("?") : null;
        var _query = queryPos != null ? uri.substr(queryPos + 1) : "";
        return _query;
    };

    //Fetch the AssetID
    var gAssetId = GetAssetId(currentUrl);

    if (cntHT_Link.length > 0 && currentUrl.indexOf("/client/") > 0)
    {
        //Do this if its only a connected client scenario, default is for web scenario. 
        var cntHT_Linkhref = cntHT_Link.attr("href");
        cntHT_Link.attr("href", cntHT_Linkhref.replace("results.aspx?", "results?"));
    }
    if (currentUrl.indexOf("/client/") === -1)
    {
        //Adjust the first paragraph's margin-top, only for Web
        $("div.cntArticleBody > p").first().css("margin-top", "-2px");
        var flyoutContent = '<div><a class="cntPSRight" href="redir/XT103927624.aspx"><img src="file.aspx?AssetId=ZA104012835" alt="Try the Office Preview" /><\/a></div>';
        var pageIndex = ["HA102809500", "HA102809308", "HA102830213", "HA102749260", "HA102606408", "HA102809628", "HA102840104", "HA102809597"];
        var promoPages = ["HA104113517", "HA104113525", "HA104113526", "HA104113527", "HA104103989", "HA104113553", "HA104113555", "HA104113558", "HA102818409", "HA102822111", "HA103106031"];
        var swIndex = ["/en-us/access-help/", "/en-us/excel-help/", "/en-us/onenote-help/", "/en-us/outlook-help/", "/en-us/powerpoint-help/", "/en-us/publisher-help/", "/en-us/word-help/"];
        var SIL = swIndex.length;
        var PIL = pageIndex.length;
        var PPL = promoPages.length;
        var isMatch = false;
        var swMatch = false;
        for (i = 0; i < PIL; i++)
        {
            if (currentUrl.indexOf(pageIndex[i]) !== -1)
            {
                //test to see if the try/buy buttons are already on the page
                if ($('.cntTempArticleButtons').is('.cntTempArticleButtons')) { isMatch = false; }
                else { isMatch = true; }
                break;
            }
        }
        for (j = 0; j < SIL; j++)
        {
            if (currentUrl.indexOf(swIndex[j]) !== -1)
            {
                swMatch = true;
                break;
            }
        }

        
        if (isMatch && swMatch)
        {
            var cntPromoBtnMeta = gAssetId;
            var cntPromoName = "name={'la':'" + cntPromoBtnMeta+ "'}";
            //Try-Buy scenario
            $("html").find("h1").before('<div id="cntPromoButtons" class="pmgPS1 cntPSRight cntTempArticleButtons cdOOHomepageWpZoneMetrics"><a ' + cntPromoName + ' title="Buy with Office" class="pmgPS1GreButton pmgMidBtn cntGSMH0010 cdOOHomepageWpLinkMetrics" href="redir.aspx?AssetId=XT103927654">Buy with Office<\/a><a ' + cntPromoName + '  title="Try with Office" class="pmgPS1GryButton pmgMidBtn cdOOHomepageWpLinkMetrics" href="redir.aspx?AssetId=XT103927624">Try with Office<\/a>');
            $(".cntTempArticleButtons .pmgPS1GreButton").css({ "margin-right": "13px" }), $(".cntTempArticleButtons").css({ position: "relative", left: "1px" });
        }
        for (k = 0; k < PPL; k++) {
            if (currentUrl.indexOf("&origin=" + promoPages[k]) !== -1 || currentUrl.indexOf(promoPages[k]) === -1) {
                //do nothing
            }
            else if (currentUrl.indexOf(promoPages[k]) !== -1) {
                $("#cntAppliesTo").prepend("<div>Topic included in:</div><div><a href='redir.aspx?AssetId=XT104115500' title='Office 365 for business Learning Center' ><img class='occeArticlePromoButton' src='file.aspx?AssetId=ZA104109623' alt='Office 365 for business Learning Center'/></a></div>");
                $(".occeArticlePromoButton").css({ padding: "8px 0 28px 0" }).mouseenter(function () { $(this).attr('src', 'file.aspx?AssetId=ZA104109621') }).mouseleave(function () { $(this).attr('src', 'file.aspx?AssetId=ZA104109623') })
            }
        }


    }
    //AutoHelp RT Service Message
    //check if ARM device
    if (gAssetId.length > 0)
    {
        if (navigator.userAgent.toLowerCase().indexOf("arm") > -1 && gAssetId.indexOf("HT") > -1)
        {
            //Create new object AutoHelpRT class
            var ObjAutoHelp = new AutoHelpRT();
            //Method to check asset Id and if we want to put service message. 
            ObjAutoHelp.AutoHelpRT("AF103684632");
        }
    }


    $("body").on("click", ".cdTrainingMainContent .btnMedium,.cdTrainingMainContent .btnLarge,.cdTrainingMainContent .btnSmall", function (event)
    {
        var modTitle = "Download";
        var modId = gAssetId.length > 0 ? gAssetId : "none";
        var pageid = modId;
        var linkText = $(this).text();
        var linkId = "Download_Button_Script"

        var logParams = {
            "WT.dl": 1,
            "DCSext.oo_ct_linktext": linkText,
            "DCSext.oo_ct_linktarget": linkId,
            "DCSext.oo_assetid": pageid,
            "DCSext.oo_ct_module": modId,
            "DCSext.oo_ct_nav": modTitle,
            "DCSext.oo_ct_samepage": location.href.indexOf(pageid) !== -1 ? "1" : "0",
            "DCSext.oo_ct_LinkAssetId": modId,
            "WT.ti": "Link:" + modTitle,
            "DCS.dcsuri": GetLocalPath(currentUrl),
            "DCS.dcssip": GetHostName(currentUrl),
            "DCS.dcsqry": GetQueryString(currentUrl),
            "wtEvtSrc": currentUrl
        };
        var logArray = new Array();
        $.each(logParams, function (key, value)
        {
            logArray.push(key);
            logArray.push(value);
        });

        if ((typeof dcsMultiTrack !== "undefined"))
        {
            try
            {
                dcsMultiTrack.apply(this, logArray);
            }
            catch (e)
            {
            }
        }
    });
    //End ----- AutoHelp RT Service Message
});

//********************************************************AutoHelp RT Service Message Control *********************************************
function AutoHelpRT()
{
    //Main function
    this.AutoHelpRT = function (AssetIdAF)
    {
        GetContent(AssetIdAF, true);
    };
    //Get Content from AF files. 
    GetContent = function (AssetID, IsAssetsList)
    {
        $.ajax({
            url: this.GetURL() + "/file.aspx?AssetID=" + AssetID,
            contentType: "text/xml",
            success: function (data)
            {
                if (IsAssetsList == true)
                {
                    //Get List of assets
                    ReadAssetIDs(data);
                }
                else
                {
                    //Put service message
                    ReadApplyRTContent(data);
                }
            }
        })
    };
    //Get list of AssetIds
    ReadAssetIDs = function (data)
    {
        if (typeof (data) !== 'undefined')
        {
            if ($(data).find("AutoHelpRTAssets").text().indexOf(gAssetId) > -1)
            {
                GetContent("AF103471678", false)
            }
        }
    };
    //Apply Service message
    ReadApplyRTContent = function (data)
    {
        if (typeof (data) !== 'undefined')
        {
            $(".cntArticleBody").append(($(data).find("div")));
        }
    };
    //Create URL to do a GET of AF files. 
    GetURL = function ()
    {
        var url = (typeof OOUI !== 'undefined' && typeof (OOUI.CurrentMarketBaseUrl) !== 'undefined') ? OOUI.CurrentMarketBaseUrl.replace("http:", window.location.protocol) : window.location.protocol + "//office.microsoft.com/" + g_llcc;
        var urlLen = url.length;
        if (url.indexOf("/", urlLen - 1) !== -1)
        {
            url = url.substr(0, urlLen - 1);
        }
        return url;
    };
};
//********************************************************End AutoHelp RT Service Message Control *********************************************