import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'dashboard', 
        component: RootComponent, 
        children: [
            { path: '', component:HomeComponent},
            { path: 'settings', component:SettingsComponent},
            { path: 'profile', component:ProfileComponent}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
