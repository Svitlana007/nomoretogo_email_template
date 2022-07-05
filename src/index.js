// Get components

// inner tamplate
import { contentMainTableWrap } from '../components/innerTemplate/src/index';

// miscellaneous tamplate (empty)
// import { miscellaneous } from "../components/miscellaneous/src/index";

// outerTemplate tamplate start
import {
  blobHead,
  bodyStyle,
  font1,
  font2,
  footerComponent,
  headComponent,
  headMetaTags,
  ifStyle,
  mediaStyle,
  style,
  style2,
  tableHeaderBlockLogo,
  topPanelViewInBrows,
} from '../components/outerTemplate/src/index';
// outerTemplate tamplate end

// typography start
import {
  headings,
  paragraph,
  strong,
} from '../components/typography/src/index';
// typography end

import UnsubLink from './miscellaneous/get-unsub-link.js';
import recipe from './components/recipeComponent.js';
import button from './components/get-button.js';
import link from './components/get-link.js';
import SocialMedia from './miscellaneous/get-social-media.js';
import address from './miscellaneous/get-address.js';
import supportContact from './components/get-supportContact.js';
import content from './components/get-content.js';
import tableForNotes from './components/tableForNotes.js';
import tableWithTwoRecipes from './components/tableWithTwoRecipes.js';

export {
  UnsubLink,
  recipe,
  button,
  link,
  SocialMedia,
  address,
  supportContact,
  content,
  tableForNotes,
  tableWithTwoRecipes,
  // inner tamplate start
  contentMainTableWrap,
  // inner tamplate end

  // outerTamplate start
  blobHead,
  bodyStyle,
  font1,
  font2,
  footerComponent,
  headComponent,
  headMetaTags,
  ifStyle,
  mediaStyle,
  style,
  style2,
  tableHeaderBlockLogo,
  topPanelViewInBrows,
  // outerTamplate end

  // typography start
  headings,
  paragraph,
  strong,
  // typography end
};
