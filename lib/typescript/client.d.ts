import { GrpcServerStreamingCall } from './server-streaming';
import { GrpcMetadata } from './types';
import { GrpcUnaryCall } from './unary';
declare type GrpcRequestObject = {
    data: string;
};
declare type GrpcType = {
    getHost: () => Promise<string>;
    getIsInsecure: () => Promise<boolean>;
    setHost(host: string): void;
    setInsecure(insecure: boolean): void;
    setResponseSizeLimit(limitInBytes: number): void;
    unaryCall(id: number, path: string, obj: GrpcRequestObject, requestHeaders?: GrpcMetadata): Promise<void>;
    serverStreamingCall(id: number, path: string, obj: GrpcRequestObject, requestHeaders?: GrpcMetadata): Promise<void>;
    cancelGrpcCall: (id: number) => Promise<boolean>;
    clientStreamingCall(id: number, path: string, obj: GrpcRequestObject, requestHeaders?: GrpcMetadata): Promise<void>;
    finishClientStreaming(id: number): Promise<void>;
};
declare const Grpc: GrpcType;
export declare class GrpcClient {
    constructor();
    destroy(): void;
    getHost(): Promise<string>;
    setHost(host: string): void;
    getInsecure(): Promise<boolean>;
    setInsecure(insecure: boolean): void;
    setResponseSizeLimit(limitInBytes: number): void;
    unaryCall(method: string, data: Uint8Array, requestHeaders?: GrpcMetadata): GrpcUnaryCall;
    serverStreamCall(method: string, data: Uint8Array, requestHeaders?: GrpcMetadata): GrpcServerStreamingCall;
}
export { Grpc };
