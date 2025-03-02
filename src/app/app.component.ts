import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ScheduleSiteVisitComponent } from './schedule-site-visit/schedule-site-visit.component';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog'; // Import the Dialog service


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myApp';
  isDialogOpen: boolean = false; // Track dialog visibility
  defaultColor = '#4caf50'; // Soft Green for Default (calming, professional)
  hoverColor = '#388e3c'; // Deep Green for Hover (contrasting yet subtle)
  iconDefaultColor = '#ffffff'; // White Icon (default for good contrast)
  iconHoverColor = '#fff59d'; // Soft Yellow Icon (brightens on hover)
  currentIcon = 'event'; // Default Icon
  isHovered = false;

  constructor(private dialog: MatDialog) {}
  onHover() {
    this.isHovered = true;
    this.currentIcon = 'calendar_today'; // Change icon on hover
  }

  onLeave() {
    this.isHovered = false;
    this.currentIcon = 'event'; // Reset icon on leave
  }

  openDialog() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true; // Set dialog state to open
      const dialogRef = this.dialog.open(ScheduleSiteVisitComponent,{
        width: '90%', // Default width for mobile
        maxWidth: '600px', // Maximum width for desktop
      });

      dialogRef.afterClosed().subscribe(() => {
        this.isDialogOpen = false; // Reset dialog state when it's closed
      });
    }
  }
}
