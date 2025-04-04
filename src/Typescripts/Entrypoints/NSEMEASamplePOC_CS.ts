/**
 * @NScriptType ClientScript
 * @NApiVersion 2.1
 */

import * as log from 'N/log';
import { EntryPoints } from 'N/types';
import {SampleChildTransactionServiceLUSY} from "@nsemea_lib/Services/SampleChildTransactionServiceLUSY";

export function pageInit(context: EntryPoints.Client.pageInit) {
  console.log('>> pageInit', `${JSON.stringify(context)}`);
}

export function onSampleTSButtonClick() {
  console.log('onSampleTSButtonClick');
  const localSrc = new SampleChildTransactionServiceLUSY();
  localSrc.log('This is a log message.');
}
