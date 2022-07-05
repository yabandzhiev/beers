declare module "*.mp3" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface Window {
  ethereum: any;
}
