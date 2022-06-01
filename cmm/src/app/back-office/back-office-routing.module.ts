import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListActualiteComponent } from "./actualite/list-actualite/list-actualite.component";
import { ActualitePageComponent } from "./pages/actualite-page/actualite-page.component";
import { AddActualiteComponent } from './actualite/add-actualite/add-actualite.component';
import { UpdateActualiteComponent } from "./actualite/update-actualite/update-actualite.component";
import { ActualiteResolver } from './actualite/actualite.resolver';
import { AdminLandPageComponent } from "./pages/admin-land-page/admin-land-page.component";
import { InterventionPageComponent } from '../front-office/pages/intervention-page/intervention-page.component';

const routes: Routes = [
    {
      path: '', component: AdminLandPageComponent,
      children: [
        {
          path: 'actualite',
          component: ActualitePageComponent,
          children: [
            { path: "", component: ListActualiteComponent },
            { path: "add", component: AddActualiteComponent },
            {
              path: "update/:id",
              component: UpdateActualiteComponent,
              resolve: {
                actualite: ActualiteResolver
              }
            },
            { path: "**", redirectTo: "", pathMatch: "full" }
          ]
  
        },
        // {
        //     path: 'intervention',
        //     component: InterventionPageComponent,
        //     children: [
        //       { path: "", component: ListActualiteComponent },
        //       { path: "add", component: AddActualiteComponent },
        //       {
        //         path: "update/:id",
        //         component: UpdateActualiteComponent,
        //         resolve: {
        //           actualite: ActualiteResolver
        //         }
        //       },
        //       { path: "**", redirectTo: "", pathMatch: "full" }
        //     ]
    
        //   },
        {
          path: '**',
          redirectTo: 'home',
          //  pathMatch: 'full'
        }
      ],
  
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BackOfficeRoutingModule { }