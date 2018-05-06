import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { Slave } from '../slave';
import { SlaveService } from '../slave.service';

@Component({
  selector: 'app-slave-selector',
  templateUrl: './slave-selector.component.html',
  styleUrls: ['./slave-selector.component.css']
})
export class SlaveSelectorComponent implements OnInit {
  slaves: Slave[];
  selectedSlaves: Slave[];
  filterText = 'Slaves: Show All';

  constructor(
    private slaveService: SlaveService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.subscribeSlaves();
  }

  subscribeSlaves(): void {
    const observable = this.slaveService.getObservable();
    observable.subscribe(slaves => this.slaves = slaves);
  }
}
