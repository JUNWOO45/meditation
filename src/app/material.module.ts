import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule ],
    exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule ]
})
export class MaterialModule {}
