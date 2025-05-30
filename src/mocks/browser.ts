import { setupWorker } from 'msw/browser';
import { artistMocks } from './artists';

export const worker = setupWorker(...artistMocks);
