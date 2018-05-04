        function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6.
        {
            var arVersion = navigator.appVersion.split("MSIE");
            var version = parseFloat(arVersion[1])
            if (version >= 7 || version < 5) return;
            //  ^^^^^^^ don't even do any of this unless this is msie 5 or 6 (save cpu cycles)
            for (var i = document.images.length - 1; i >= 0; i--) {
                var imgSrc=document.images[i].src;
                if (imgSrc.toLowerCase().substring(imgSrc.length - 3) == "png") {
                    // only run the fix on png's (save a few cpu cycles)
                    fixPNG(document.images[i]);
                }
            }
        }
        
        window.attachEvent("onload", correctPNG);
        function fixPNG(img) {
            // make extra sure this is ie5 or 6:
            var arVersion = navigator.appVersion.split("MSIE");
            var version = parseFloat(arVersion[1])
            if (version >= 7 || version < 5) return;
            // hide the image, and make sure it has a width and height before fixing it:
            img.style.visibility = 'hidden';
            if (!img.width || !img.height) return setTimeout(function() { fixPNG(img) }, 10);
            img.style.visibility = 'inherit';
            var imgName = img.src.toUpperCase();
            // make extra sure this is a png:
            if (imgName.substring(imgName.length - 3, imgName.length) == "PNG") {
                var imgID = (img.id) ? "id='" + img.id + "' " : ""
                var imgClass = (img.className) ? "class='" + img.className + "' " : ""
                var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
                var imgStyle = "display:inline-block;" + img.style.cssText;
                if (img.align == "left") imgStyle = "float:left;" + imgStyle
                if (img.align == "right") imgStyle = "float:right;" + imgStyle
                if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
                // replace the image with a span which has 'alphaImageLoader' filter applied to it
                var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
                img.outerHTML = strNewHTML;
            }
        }