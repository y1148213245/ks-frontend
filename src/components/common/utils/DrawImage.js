/**
 * Created by codingnuts on 2017/12/27.
 */
function DrawImage (ImgD, iwidth, iheight) {
	var image = new Image();
	image.src = ImgD.src;

	if (image.width > 0 && image.height > 0) {
		flag = true;
		if (image.width / image.height >= iwidth / iheight) {
			// 宽度优先，高度缩放
			ImgD.style.width = iwidth + 'px';
			ImgD.style.height = (image.height * iwidth) / image.width + 'px';
		} else {
			// 高度优先，宽度适应
			ImgD.style.height = iheight + 'px';
			ImgD.style.width = (image.width * iheight) / image.height + 'px';
		}
	}
}

export default DrawImage;