import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule ],
    exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule, MatSlideToggleModule ]
})
export class MaterialModule {}
