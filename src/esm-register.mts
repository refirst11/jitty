import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('kpx/dist/index.mjs', pathToFileURL('./').toString());
