/*export * from './definitions';
export * from './web';
*/
import { registerPlugin } from "@capacitor/core";
export * from './web';
import { SunmiPrinterPlugin } from "./definitions";

const SunmiPrinter = registerPlugin<SunmiPrinterPlugin>("SunmiPrinter", {
    web: () => import("./web").then((m) => new m.SunmiPrinterWeb()),
});

// export * from './web'; // @todo
export * from "./definitions";
export { SunmiPrinter };
