import { Injectable } from '@angular/core';

import { EntityManager, EntityQuery } from 'breeze-client';

import { Customer } from '../model/entity-model'
import { RegistrationHelper } from '../model/registration-helper'

@Injectable()
export class ZzaRepositoryService {

  private _em: EntityManager = new EntityManager('http://competition-fisher-api.azurewebsites.net/breeze/zza');

  constructor() {
    RegistrationHelper.register(this._em.metadataStore);
  }

  getCustomers(): Promise<Customer[]>{
    const promise = new Promise<Customer[]>((resolve, reject) => {
      const query = EntityQuery.from('Customers');
      this._em.executeQuery(query).then(queryResult => resolve(<any>queryResult.results),
                                        error => reject(error));
    });

    return promise;
  }

}
