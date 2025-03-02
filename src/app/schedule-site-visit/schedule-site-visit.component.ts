import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-site-visit',
  templateUrl: './schedule-site-visit.component.html',
  styleUrls: ['./schedule-site-visit.component.scss'],
})
export class ScheduleSiteVisitComponent {
  siteVisitForm: FormGroup;
  isDialogOpen: boolean = false; // Track dialog visibility


  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<ScheduleSiteVisitComponent>, private dialog: MatDialog) {
    this.siteVisitForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      pincode: ['', Validators.required],
      acceptUpdates: [false],
    });
  }

  onSubmit() {
    if (this.siteVisitForm.valid) {
      console.log('Form Submitted:', this.siteVisitForm.value);
      this.dialog.closeAll();
    }
  }
  openDialog() {
    if (!this.isDialogOpen) {
      this.dialog.open(ScheduleSiteVisitComponent);
      this.isDialogOpen = true;
    }
  }
  
  closeDialog() {
    this.dialogRef.close();  // Close the dialog when called
    this.isDialogOpen = false;
  }
}
