/**
 * @NScriptType ClientScript
 * @NApiVersion 2.1
 */

import * as log from 'N/log';
import { EntryPoints } from 'N/types';

export function pageInit(context: EntryPoints.Client.pageInit) {
  console.log('>> pageInit', `${JSON.stringify(context)}`);
}

export function onSampleTSButtonClick() {
  console.log('onSampleTSButtonClick');
}
