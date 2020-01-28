import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule ],
    exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule ]
})
export class MaterialModule {}
