import { Channel } from 'redux-saga';

export type getCookie = (cname: string) => string;

export type startAction = (type: string) => string;
export type successAction = (type: string) => string;
export type failAction = (type: string) => string;
export type callApi = (type: string) => string;

export type appendZero = (number: number) => string;

export type buildHeaders = (xFileToken?: string, isUpload?: boolean) => ({
    'X-XSRF-TOKEN': string;
    'X-FILE-TOKEN'?: string;
    'Content-Type'?: string;
    'Accept': string;
    [key: string]: string | null | undefined;
});

export type buildQuery = (params: { [key: string?]: any }) => string;

export type compose = (...fns: ArgumentTypes<Function>) => () => any;

export enum cookieKeys {
    JWT_TOKEN = 'jwt_token_cookie',
    XSRF_TOKEN = 'xsrf_token_cookie',
}

export type createEventChannel = (eventName: string, target: HTMLElement) => Channel;

export type dispatchEvent<Element> = (
    eventType: string,
    eventData: { [key: string]: any},
    eventTarget: Element | HTMLHeadElement,
) => void;

export type getAppToken = () => { [key: string?]: any };

export type getCookie = (cname: string) => string;

export type hasTag = (tag: string) => (src: string) => boolean;

export type isArray = (value: any) => boolean;

export type isEdge = () => boolean;

export type isFunc = (value: any) => boolean;

export type isIE = () => boolean;

export type isNull = (value: any) => boolean;

export type isObject = (value: any) => boolean;

export type isString = (value: any) => boolean;

export type isTypeOf = (type: any) => (value: any) => boolean;

export type isUndefined = (value: any) => boolean;

export type load = (tag: any, url: string) => Promise<any>;

export type loadCss = (url: string) => Promise<any>;

export type loadScript = (url: string) => Promise<any>;

export type pipe = (...fns: ArgumentTypes<Function>) => (arg: ArgumentTypes<any>) => any;

export type showEmptyText = (value: string) => string;

export type sortBy = (key: string | string[]) => (a: any, b: any) => number;

export type trimPayload = (payload: { [key: string?]: any }) => { [key: string?]: any };

export type trimValue = (value: string | Array<any> | { [key: string?]: any }) => string | Array<any> | { [key: string?]: any };
