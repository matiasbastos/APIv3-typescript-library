import { GetExtendedListAllOfCampaignStats } from './getExtendedListAllOfCampaignStats';
export declare class GetExtendedList {
    'id': number;
    'name': string;
    'totalBlacklisted': number;
    'totalSubscribers': number;
    'folderId': number;
    'createdAt': Date;
    'campaignStats'?: Array<GetExtendedListAllOfCampaignStats>;
    'dynamicList'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
