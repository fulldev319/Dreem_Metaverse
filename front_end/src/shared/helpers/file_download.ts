export const forceDownload = href => {
  var anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = href;
  document.body.appendChild(anchor);
  anchor.click();
};
