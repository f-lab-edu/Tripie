import { RequestHandler } from 'msw';
import { setupServer } from 'msw/node';

export const mockServer = (handlers: RequestHandler[]) => setupServer(...handlers);
