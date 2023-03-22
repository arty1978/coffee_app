export declare class AppController {
    getMessage(message: string): string;
    getMessageAysnc(message: string): Promise<string>;
    handleCoffereatedEvent(data: Record<string, unknown>): Promise<void>;
}
