import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule ],
    exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule ]
})
export class MaterialModule {}
