/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LocalObjectReference } from './v1LocalObjectReference';

export class V1RBDVolumeSource {
    'fsType'?: string;
    'image'?: string;
    'keyring'?: string;
    'monitors'?: Array<string>;
    'pool'?: string;
    'readOnly'?: boolean | null;
    'secretRef'?: V1LocalObjectReference;
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "keyring",
            "baseName": "keyring",
            "type": "string"
        },
        {
            "name": "monitors",
            "baseName": "monitors",
            "type": "Array<string>"
        },
        {
            "name": "pool",
            "baseName": "pool",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1LocalObjectReference"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1RBDVolumeSource.attributeTypeMap;
    }
}

