import {Routes} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {path : '', 
    component : UserProfileComponent
},
    {path : 'user', 
    component : UserProfileComponent
},
    {path : 'signup', 
    component : SignUpComponent},
];

export {routes};