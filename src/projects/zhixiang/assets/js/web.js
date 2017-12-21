/**
 * Created by zhu.ly on 2017/9/15.
 */
//图片正比例缩放
function DrawImage(ImgD,iwidth,iheight) {
  var image=new Image();
  image.src=ImgD.src;
  //console.log("newimg h:"+image.height);
  //console.log("newimg w:"+image.width);
  //console.log("img h:"+iheight);
  //console.log("img w:"+iwidth);
  //console.log("Myimg h:"+ImgD.height);
  //console.log("Myimg w:"+ImgD.width);
  if(image.width>0 && image.height>0){
    flag=true;
    if(image.width/image.height>= iwidth/iheight){
      // 宽度优先，高度缩放
      ImgD.style.width=iwidth + 'px';
      ImgD.style.height=(image.height*iwidth)/image.width+ 'px';

      // if(image.width>iwidth){
      //     ImgD.width=iwidth;
      //     ImgD.height=(image.height*iwidth)/image.width;
      // }else{
      //     ImgD.width=image.width;
      //     ImgD.height=image.height;
      // }
    }else{
      // 高度优先，宽度适应
      ImgD.style.height=iheight+ 'px';
      ImgD.style.width=(image.width*iheight)/image.height + 'px';

      // if(image.height>iheight){
      //     ImgD.height=iheight;
      //     ImgD.width=(image.width*iheight)/image.height;
      // }else{
      //     ImgD.width=image.width;
      //     ImgD.height=image.height;
      // }
    }
    //console.log("after Myimg h:"+ImgD.height);
    //console.log("after Myimg w:"+ImgD.width);
  }

}
