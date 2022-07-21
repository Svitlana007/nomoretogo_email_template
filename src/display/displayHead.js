// import { displayFactoryTwo } from 'email-template-object';
import Factory from './factory';
import headComponent from '../domain/outer/headComponent';

// TODO import components from subcomponents/outerTemplate
import {
  blobHead,
  bodyStyle,
  font1,
  font2,
  headMetaTags,
  ifStyle,
  mediaStyle,
  style,
  style2,
} from '../domain/outer/subHeadComponents';

var error = '';
var result = null;
try {
  var params = {
    blobHead: blobHead(),
    bodyStyle: bodyStyle(),
    font1: font1(),
    font2: font2(),
    headMetaTags: headMetaTags(),
    ifStyle: ifStyle(),
    mediaStyle: mediaStyle(),
    style: style(),
    style2: style2(),

    // variable:value,
    title: 'text title',
  };

  const factory = new Factory(headComponent, params);
  result = factory.create();
} catch (e) {
  error = e.message;
}

if (error != '') {
  console.log(error);
}

export default result;
