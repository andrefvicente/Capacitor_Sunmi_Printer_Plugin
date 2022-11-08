import { WebPlugin } from '@capacitor/core';
import { SunmiPrinterPlugin } from './definitions';

export class SunmiPrinterWeb extends WebPlugin implements SunmiPrinterPlugin {
  constructor() {
    super({
      name: 'SunmiPrinter',
      platforms: ['web'],
    });
  }

  async echo(_options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', _options);
    return _options;
  }

  async discoverPrinters(): Promise<{ results: any[] }> {
    return {
      results: [{
        name: 'Dummy1',
        address: '123456'
      }, {
        name: 'Dummy2',
        address: '456789'
      }]
    };
  }

  async connectPrinter(_options: { address: string }): Promise<{ results: boolean }> {
    console.log("options");
    console.log(_options);
    return {
      results: true
    };
  }

  async disconnectPrinter(): Promise<{ results: boolean }> {
    return {
      results: true
    };
  }

  async printString(_options: { contents: string, is_bold: boolean, is_underline: boolean }): Promise<{ results: boolean }> {
    console.log("options");
    console.log(_options);

    return {
      results: true
    };
  }

  async printBarcode(_options: { barcode: string }): Promise<{ results: boolean }> {
    console.log("options");
    console.log(_options);

    return {
      results: true
    };
  }

  async printCommand(_options: { command: string }): Promise<{ results: boolean }> {
    console.log("options");
    console.log(_options);

    return {
      results: true
    };
  }

  async openCashRegister(): Promise<{ results: boolean }> {
    return {
      results: true
    };
  }
}

const SunmiPrinter = new SunmiPrinterWeb();

export { SunmiPrinter };

