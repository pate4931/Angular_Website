import { Component, Input } from '@angular/core';
import { campusData } from '../pate4931Interface';


@Component({
  selector: 'app-campus-pate4931',
  templateUrl: './campus-pate4931.component.html',
  styleUrl: './campus-pate4931.component.css'
})
export class CampusPate4931Component {
  @Input() campusData: campusData[] = [];

  selectedCampusName: string = '';
  selectedCampusAddress: string = '';
  selectedCampusCity: string = '';

  onSelectCampus(campusName: string): void {
    const selectedCampus = this.campusData.find(campus => campus.campus === campusName);
    if (selectedCampus) {
      this.selectedCampusName = `Name: ${selectedCampus.campus}`;
      this.selectedCampusAddress = `Address: ${selectedCampus.street}`;
      this.selectedCampusCity = `City: ${selectedCampus.city}`;
    } else {
      this.selectedCampusName = 'No Campus found';
      this.selectedCampusAddress = 'No address found for selected campus.';
      this.selectedCampusCity = 'No City found for selected address.';
    }
  }

}
