/**
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */

import * as log from 'N/log';
import { EntryPoints } from 'N/types';

export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext) {
  log.debug({
    title: 'SDF TS > Sample POC',
    details: 'entrypoint : beforeLoad',
  });
  if ([context.UserEventType.VIEW].includes(context.type)) {
    context.form.clientScriptModulePath = './NSEMEASamplePOC_CS.js';
    context.form.addButton({
      id: 'custpage_nsemea_sample_poc_btn',
      label: 'Sample TS',
      functionName: 'onCSampleTSButtonClick',
    });
  }
}