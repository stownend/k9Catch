import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  @ViewChild('modal')
  modal: ModalComponent;

  @Output() onOkClicked: EventEmitter<any> = new EventEmitter();
  @Output() onCancelClicked: EventEmitter<any> = new EventEmitter();

  @Input() title;
  @Input() body;

  constructor() { }

  ngOnInit() {
  }

  public openModal() {
    this.modal.open();
  }

  okSelected() {
    this.onOkClicked.emit();    
  }

  cancelSelected() {
    this.onCancelClicked.emit();    
  }

}
