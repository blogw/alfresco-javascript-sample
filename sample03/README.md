ImageMagick transformImage
===

#the drwolf/alfresco-42f have installed imageMagick & ghostscript

http://fcorti.com/2013/01/09/installation-alfresco-4-2-c-on-ubuntu/

http://docs.alfresco.com/4.1/tasks/imagemagick-config.html

http://docs.alfresco.com/community/references/API-JS-Transformation-image.html

var node = companyhome.childByNamePath("WIND_TURBINE.JPG");
var destDir = companyhome.childByNamePath("TRANSFORMED_IMAGES");
var transformedNode = node.transformImage("image/gif", destDir);

var thumbImage = n.transformImage( "image/tiff", '-resize '+ width +'x'+ height +'-quality 95 ',GtargetFolderNeu );