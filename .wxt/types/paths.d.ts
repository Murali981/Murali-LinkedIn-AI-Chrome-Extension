// Generated by wxt
import "wxt/browser";

declare module "wxt/browser" {
  export type PublicPath =
    | "/assets/AIIcon.svg"
    | "/assets/DArrow.svg"
    | "/assets/RArrow.svg"
    | "/assets/Refresh.svg"
    | "/background.js"
    | "/backupcode-v1.js"
    | "/backupcode-v2.js"
    | "/backupcode-v3.js"
    | "/backupcode-v4.js"
    | "/content-scripts/content.js"
    | "/icon/128.png"
    | "/icon/16.png"
    | "/icon/32.png"
    | "/icon/48.png"
    | "/icon/96.png"
    | "/popup.html"
    | "/wxt.svg"
  type HtmlPublicPath = Extract<PublicPath, `${string}.html`>
  export interface WxtRuntime {
    getURL(path: PublicPath): string;
    getURL(path: `${HtmlPublicPath}${string}`): string;
  }
}
