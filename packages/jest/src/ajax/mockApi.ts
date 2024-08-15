import { http, HttpResponse, HttpResponseInit } from 'msw';

type PrimitiveTypes = string | number | boolean | null | undefined;
type ReferenceTypes = Record<string, unknown> | unknown[];
type Resolver = PrimitiveTypes | ReferenceTypes;

function get(url: string, resolver: Resolver, options?: HttpResponseInit) {
  return http.get(url, () => {
    return HttpResponse.json(resolver, options);
  });
}

function post(url: string, resolver: Resolver, options?: HttpResponseInit) {
  return http.post(url, () => {
    return HttpResponse.json(resolver, options);
  });
}

function put(url: string, resolver: Resolver, options?: HttpResponseInit) {
  return http.put(url, () => {
    return HttpResponse.json(resolver, options);
  });
}

function del(url: string, resolver: Resolver, options?: HttpResponseInit) {
  return http.delete(url, () => {
    return HttpResponse.json(resolver, options);
  });
}

export const mockApi = {
  get,
  post,
  put,
  del,
};
