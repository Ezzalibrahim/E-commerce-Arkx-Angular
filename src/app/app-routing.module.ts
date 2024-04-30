import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./components/product/product.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";


const routes : Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "show",
        component : ProductListComponent
    },
    {
        path : "products/:id",
        component : ProductComponent
    },
    {
        path : "blog",
        component : BlogComponent
    },
    {
        path : "shoppingcart",
        component : ShoppingCartComponent
    },
    {
        path : "auth/login",
        component : LoginComponent
    },
    {
        path : "auth/register",
        component : RegisterComponent
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }