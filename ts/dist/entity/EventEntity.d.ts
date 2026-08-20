import { GcalEntityBase } from '../GcalEntityBase';
import type { GcalSDK } from '../GcalSDK';
import type { Control } from '../types';
import type { Event, EventLoadMatch, EventListMatch, EventCreateData, EventUpdateData, EventRemoveMatch } from '../GcalTypes';
declare class EventEntity extends GcalEntityBase<Event> {
    constructor(client: GcalSDK, entopts: any);
    make(this: EventEntity): EventEntity;
    load(this: any, reqmatch?: EventLoadMatch, ctrl?: Control): Promise<EventEntity>;
    list(this: any, reqmatch?: EventListMatch, ctrl?: Control): Promise<EventEntity[]>;
    create(this: any, reqdata?: EventCreateData, ctrl?: Control): Promise<EventEntity>;
    update(this: any, reqdata?: EventUpdateData, ctrl?: Control): Promise<EventEntity>;
    remove(this: any, reqmatch?: EventRemoveMatch, ctrl?: Control): Promise<EventEntity>;
}
export { EventEntity };
