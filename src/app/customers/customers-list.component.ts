import { Component, OnInit } from '@angular/core';
import { ZzaRepositoryService } from '../shared/zzarepository.service';
import { Customer } from '../model/customer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'zza-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];

  constructor(private _zzaRepository: ZzaRepositoryService) { }

  ngOnInit() {
    this._zzaRepository.getCustomers()
      .then(customers =>
        this.customers = customers,
            error => console.log(error));

}
}
