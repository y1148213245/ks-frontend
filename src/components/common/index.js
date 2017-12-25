/**
 * Created by codingnuts on 2017/12/19.
 */
import {post, get} from 'axios';
import readProd from "@project/config/index.js";

var Post = readProd || (process.env.NODE_ENV === 'production') ? post : get;

function DrawImage(ImgD,iwidth,iheight){
	var image=new Image();
	image.src=ImgD.src;

	if(image.width>0 && image.height>0){
		flag=true;
		if(image.width/image.height>= iwidth/iheight){
			// 宽度优先，高度缩放
			ImgD.style.width=iwidth + 'px';
			ImgD.style.height=(image.height*iwidth)/image.width+ 'px';
		}else{
			// 高度优先，宽度适应
			ImgD.style.height=iheight+ 'px';
			ImgD.style.width=(image.width*iheight)/image.height + 'px';
		}
	}
}

export {get as Get, Post,DrawImage};
