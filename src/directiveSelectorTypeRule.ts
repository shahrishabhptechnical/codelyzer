import * as Lint from 'tslint/lib/lint';
import {SelectorRule} from './selectorNameBase';
import {SelectorValidator} from './util/selectorValidator';

const FAILURE_STRING = 'The selector of the directive "%s" should be used as %s, however its value is "%s".';

export class Rule extends SelectorRule {
  constructor(ruleName: string, value: any, disabledIntervals: Lint.IDisabledInterval[]) {
    super(ruleName, value, disabledIntervals, SelectorValidator[value[1]], FAILURE_STRING);
  }
}
