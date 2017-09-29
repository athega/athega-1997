var initiated = false;

var offImages = new Array();
var onImages  = new Array();

function LoadImages (imgs) {
    if (BrowserIsOK()) {
        var img = 0;
        var x   = 0;
        var y   = 0;
        var src = 0;

        for (var i=0; i<imgs.length; i+=3) {
            x   = i;
	    y   = i + 1;
	    src = i + 2;

            offImages[img] = new Image(imgs[x], imgs[y]);
	    offImages[img].src = MakePath(imgs[src], "off");

	    onImages[img] = new Image(imgs[x], imgs[y]);
	    onImages[img].src = MakePath(imgs[src], "on");

	    img++;
        }
    }
}

function Initiate(status) {
    initiated = status;
}

function ImageOn(i, msg) {
    if (BrowserIsOK() && initiated) {
        document["image"+i].src = onImages[i].src
        window.status = msg;
        return true;
    } else {
        return true;
    }
}

function ImageOff(i, msg) {
    if (BrowserIsOK() && initiated) {
        document["image"+i].src = offImages[i].src
        window.status = msg;
        return true;
    } else {
        return true;
    }
}

function MakePath(full, part) {
    if (BrowserIsOK()) {
        var path = "";

        for (var i=full.length-1; i>=0; i--) {
            if (full.charAt(i) == ".") {
	        path = full.substring(0, i) + part + full.substring(i, full.length);
	        break;
	    }
        }

        return path;
    }
}

function BrowserIsOK() {
    if ((navigator.appName == "Netscape" && navigator.appVersion.charAt(0) > 2) ||
        (navigator.appVersion.charAt(0) > 3)) {
	return true;
    } else {
        return false;
    }
}
