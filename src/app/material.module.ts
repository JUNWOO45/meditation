import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule, MatSliderModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule, MatSliderModule ],
    exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule, MatSliderModule ]
})
export class MaterialModule {}
