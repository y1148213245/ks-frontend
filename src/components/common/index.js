/**
 * Created by codingnuts on 2017/12/19.
 */
import {post, get} from 'axios';

var Post = (process.env.NODE_ENV === 'production') ? post : get;

export {get, Post};