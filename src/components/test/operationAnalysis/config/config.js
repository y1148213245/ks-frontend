/**
 * Created by codingnuts on 2017/10/10.
 */

import prod from './pro.config';
import dev from './dev.config';

const env = !(process.env.NODE_ENV === 'production') ? prod : dev;

//频率相关
export const CONFIG = env.FREQUENCY;

//大数据 前缀
export const BASE_AMUC_URL = env.BASE_AMUC_URL;