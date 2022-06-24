// Create image component

// Errors
// const recipeTitleError = "No title in recipeComponent";
// const recipeTextError = "No text in recipeComponent";
// const recipeImageError = `No ${variable} in recipeComponent`;
const recipeErrors = `No ${variable} in recipeComponent`;

// Config file
import { pathImages } from "../config.js";

// Checking for errors start
function checkingForErrors(variable) {
  throw new Error(recipeErrors);
}
// Checking for errors end

// Get title start
const titleComponent = (title) => {
  if (!title) {
    // throw new Error(recipeTitleError);
    checkingForErrors("title");
  }

  return `<strong>
      <span style="font-size: 16px;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">
            ${title}
          </font>
        </font>
      </span>
    </strong><br>`;
};
// Get title end

// Get text start
const textComponent = (text) => {
  if (!text) {
    // throw new Error(recipeTextError);
    checkingForErrors("text");
  }

  return `<font style="vertical-align: inherit;">
  <font style="vertical-align: inherit;">
    ${text}
  </font>
</font><br>`;
};
// Get text end

// Get image start
const imageComponent = (id, href, src) => {
  if (!id) {
    checkingForErrors("id");
  }
  if (!href) {
    checkingForErrors("href");
  }
  if (!src) {
    checkingForErrors("src");
  }

  const srcPath = pathImages + src;
  return `<a href="${href}" data-link-id="${id}" target="_self"><img src="${srcPath}" border="0" alt="" width="267" style="display: block;"></a>`;
};
// Get image end

//  Get main block start
const mainBlock = (id, href, src, title, text) => {
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
<tbody><tr>
  <td id="imageBlock-26" align="center">
   ${imageComponent(id, href, src)}
  </td>
</tr>
<tr>
  <td align="center" style="padding: 0px 20px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
      <tbody><tr>
        <td height="20" class="spacingHeight-20"></td>
      </tr>
      <tr>
        <td align="left" class="bodyTitle" id="bodyText-26" style="font-family: "Poppins", sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
          <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;">
            ${titleComponent(title)}
            ${textComponent(text)}
          </p>
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>`;
};
// Get main block end

export default function (id, href, src, title, text) {
  // old version start
  // const data_array = [
  //   { data: id, key: "id" },
  //   { data: href, key: "href" },
  //   { data: src, key: "src" },
  //   { data: title, key: "title" },
  //   { data: text, key: "text" },
  // ];

  // data_array.forEach((item) => {
  //   if (item.data == "") {
  //     throw new Error("No " + item.key + " recipes");
  //   }
  // });
  // old version end

  return mainBlock(id, href, src, title, text);
}