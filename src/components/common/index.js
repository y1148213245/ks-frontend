/**
 * Created by codingnuts on 2017/12/19.
 */
import {post, get} from 'axios';
import readProd from "@project/config/index.js";

var Post = readProd || (process.env.NODE_ENV === 'production') ? post : get;

export {get as Get, Post};
