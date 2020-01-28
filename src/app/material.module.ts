import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule ],
    exports: [ MatButtonModule, MatFormFieldModule, MatInputModule ]
})
export class MaterialModule {}
