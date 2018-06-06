/*
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
import * as Observable from 'zen-observable';
import { XRProvider, ProviderOptions } from '../types';
import { ConsoleLogger as Logger } from '../../Common';
import { AnyLengthString } from 'aws-sdk/clients/comprehend';

const logger = new Logger('AbstractXRProvider');

export abstract class AbstractXRProvider implements XRProvider {

    private _config: ProviderOptions;

    constructor(options: ProviderOptions = {}) {
        this._config = options;
    }

    configure(config: ProviderOptions = {}): ProviderOptions {
        this._config = { ...config, ...this._config };

        logger.debug(`configure ${this.getProviderName()}`, this._config);

        return this.options;
    }

    getCategory() { return 'XR'; }

    abstract getProviderName(): string;

    protected get options(): ProviderOptions { return { ...this._config }; }

    public abstract getScene(sceneId: string): Object;

    public abstract loadScene(sceneId: string): void;

}
