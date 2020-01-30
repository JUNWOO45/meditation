import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule ],
    exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonToggleModule ]
})
export class MaterialModule {}
