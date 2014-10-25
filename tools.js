//tools
var sound = new Audio("hp.mp3");
var sortinghat = new Audio("sortinghat.mp3");


var bailwal_modalPopupWindow = null;

function CreateModalPopUpObject() {
    if (bailwal_modalPopupWindow == null) {
        bailwal_modalPopupWindow = new ModalPopupWindow();
    }
    return bailwal_modalPopupWindow;
}

function ModalPopupWindow() {
    var strOverLayHTML = '<div id="bailwal_div_overlay" onmousemove="bailwal_modalPopupWindow.DoDragging(event)" onmouseup="bailwal_modalPopupWindow.StopDragging()" style="position:absolute;z-index:10; background-color:WHITE; filter: alpha(opacity = 50);opacity:0.7;"></div><div id="bailwal_div_frame_parent" style="position:absolute;z-index:12; display:none;background-color:white;border:1px solid;-moz-box-shadow: 0 0 10px 10px #BBB;-webkit-box-shadow: 0 0 10px 10px #BBB;box-shadow: 0 0 10px 10px #BBB;"><table  width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" onmouseup="bailwal_modalPopupWindow.StopDragging()"><tr style="background-color:black;" id="bailwal_tr_title" onmousedown="bailwal_modalPopupWindow.StartDragging(event,this)" onmousemove="bailwal_modalPopupWindow.DoDragging(event)" onmouseup="bailwal_modalPopupWindow.StopDragging()"><td align="left"><span id="bailwal_span_title" style="color:White;font-size:16pt;padding-left:2px"></span></td><td  align="right" style="height:25px;"><span onclick="bailwal_modalPopupWindow.HideModalPopUp();" style="cursor:pointer"> <img id="bailwal_img_overlay_close"  src="" alt="X" </span></td></tr><tr ><td colspan="2" align="justify" width="100%" id="bailwal_td_overlay"><div id="bailwal_div_message" style="margin-top:2px;margin-right:4px;display:none;"  ><span id="bailwal_span_message" style="padding-left:2px;padding-top:2px;padding-bottom:2px;margin-right:2px; font-size:12pt;"  ></span></div><iframe onload="bailwal_modalPopupWindow.OnUrlLoaded()" name="bailwal_overlay_frame" id="bailwal_overlay_frame" src="/Blank.htm" frameborder="0" scrolling="auto" ></iframe> </td></tr><tr id="bailwal_tr_overlay_btn" ><td colspan="2" align="center" style="padding-top:20px;padding-bottom:10px;"><input type="button" id="baiwlal_btn_overlay_1" onclick="bailwal_modalPopupWindow.HideModalPopUp()" value="Ok" style="padding:3px; border:1 solid #dcdcdc;BACKGROUND-COLOR: #f5f5f5;"   /><input type="button" id="bailwal_btn_overlay_2" onclick="bailwal_modalPopupWindow.HideModalPopUp()" value="Cancel" style="padding:3px;margin-left:20px;border:1 solid #dcdcdc;BACKGROUND-COLOR: #f5f5f5;"   /> </td></tr></table></div>';
    var orginalHeight;
    var orginalWidth;
    document.write(strOverLayHTML);
    this.Draggable = false;

    var onPopUpCloseCallBack = null;
    this.SetCloseButtonImagePath = function (imagePath) {
        document.getElementById("bailwal_img_overlay_close").src = imagePath;
    }

    function __InitModalPopUp(height, width, title) {
        orginalWidth = width;
        orginalHeight = height;
        maximize = false;
        var divFrameParent = document.getElementById("bailwal_div_frame_parent");
        var divOverlay = document.getElementById("bailwal_div_overlay");
        var iframe = document.getElementById("bailwal_overlay_frame");
        var tdOverLay = document.getElementById("bailwal_td_overlay");
        var left = (window.screen.availWidth - width) / 2;
        var top = (window.screen.availHeight - height) / 2;
        var xy = GetScroll();
        left += xy[0];
        top += xy[1];
        document.getElementById("bailwal_tr_overlay_btn").style.display = "none";
        document.getElementById("bailwal_span_title").innerHTML = title;
        var e = document;
        var c = "Height";
        var maxHeight = Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
        c = "Width";
        var maxWidth = Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
        divOverlay.style.height = maxHeight + "px";
        divOverlay.style.width = maxWidth - 2 + "px";
        divOverlay.style.display = "";
        iframe.style.display = "none";
        divFrameParent.style.display = "";
        divFrameParent.style.top = top + "px";
		divFrameParent.style.left = left + "px";
        divFrameParent.style.height = height + "px";
        divFrameParent.style.width = width + "px";
        iframe.style.height = "0px";
        iframe.style.width = "0px";
        onPopUpCloseCallBack = null;
    }
   
    this.ShowMessage = function (message, height, width, title) {
        __InitModalPopUp(height, width, title);
        var tdOverLay = document.getElementById("bailwal_td_overlay");
        //tdOverLay.style.height = "50px";
        //tdOverLay.style.width = "0px";
        document.getElementById("bailwal_span_message").innerHTML = message;
		document.getElementById("bailwal_span_message").style.color = "black";

        document.getElementById("bailwal_div_message").style.display = "";

	}
 
    this.HideModalPopUp = function () {
        var divFrameParent = document.getElementById("bailwal_div_frame_parent");
        var divOverlay = document.getElementById("bailwal_div_overlay");
        divOverlay.style.display = "none";
        divFrameParent.style.display = "none";
        this.Draggable=true;
        if (onPopUpCloseCallBack != null && onPopUpCloseCallBack != '') {
            onPopUpCloseCallBack();
        }
    }

    this.ChangeModalPopUpTitle = function (title) {
        document.getElementById("bailwal_span_title").innerHTML = title;
    }

    function GetScroll() {
        if (window.pageYOffset != undefined) {
            return [pageXOffset, pageYOffset];
        } else {
            var sx, sy, d = document,
                r = d.documentElement,
                b = d.body;
            sx = r.scrollLeft || b.scrollLeft || 0;
            sy = r.scrollTop || b.scrollTop || 0;
            return [sx, sy];
        }
    }
    
}
