import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input() set listItems(value: any[]) {
    this.setState('listItems', value);
  }
  get listItems(): any[] {
    return this.state.listItems;
  }
  @Output() selectedItem = new EventEmitter<any>();

  state = {
    hideList: true,
    showHeader: true,
    selectedItem: null,
    listItems: []
  };
  constructor(private cd: ChangeDetectorRef) { }
  private setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }
  toggleList() {
    this.setState('hideList', !this.state.hideList);
  }
  clickedItem(item) {
    this.setState('selectedItem', item);
    this.toggleList();
    this.selectedItem.emit(item);
  }
}
