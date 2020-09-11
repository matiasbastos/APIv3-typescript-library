/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Email sending credentials including subject, body, to, cc etc.
*/
export class SendReportEmail {
    /**
    * Subject of the email message
    */
    'subject': string;
    /**
    * Email addresses of the recipients
    */
    'to': Array<string>;
    /**
    * Type of the message body
    */
    'contentType'?: SendReportEmail.ContentTypeEnum;
    /**
    * Email addresses of the recipients in bcc
    */
    'bcc'?: Array<string>;
    /**
    * Email addresses of the recipients in cc
    */
    'cc'?: Array<string>;
    /**
    * Body of the email message
    */
    'body': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "SendReportEmail.ContentTypeEnum"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SendReportEmail.attributeTypeMap;
    }
}

export namespace SendReportEmail {
    export enum ContentTypeEnum {
        Text = <any> 'text',
        Html = <any> 'html'
    }
}
