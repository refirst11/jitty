import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('jitty/dist/jitty.js', pathToFileURL('./').toString());
