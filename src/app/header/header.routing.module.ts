import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UlancamentosComponent } from "../ulancamentos/ulancamentos.component";
import { DatacenterComponent } from "./datacenter/datacenter.component";
import { HeaderComponent } from "./header.component";
import { NetComponent } from "./net/net.component";
import { PodcssComponent } from "./podcss/podcss.component";
import { PodhtmlComponent } from "./podhtml/podhtml.component";
import { PythonComponent } from "./python/python.component";
import { RestComponent } from "./rest/rest.component";

const headerRoutes = [
    {path: 'header', component: HeaderComponent, children:[
        {path: 'datacenter', component: DatacenterComponent},
        {path: 'net', component: NetComponent},
        {path: 'podcss', component: PodcssComponent},
        {path: 'podhtml', component: PodhtmlComponent},
        {path: 'python', component: PythonComponent},
        {path: 'rest', component: RestComponent},
        {path: 'ulancamentos', component: UlancamentosComponent}

    ]},
];

@NgModule({
    imports: [RouterModule.forChild(headerRoutes)],
    exports: [RouterModule],
})

export class HeaderRoutingModule {}