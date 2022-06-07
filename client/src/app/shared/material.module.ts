import {  NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [

    MatNativeDateModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTooltipModule,
    // Sort module
    MatSortModule,
    // Paginator module
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    // Sort module
    MatSortModule,
    // Paginator module
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  providers: [
  ],
})
export class MaterialModule { }
