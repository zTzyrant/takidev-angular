import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core"
import { BrowserModule, provideClientHydration } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"
import { getAuth, provideAuth } from "@angular/fire/auth"
import { getFirestore, provideFirestore } from "@angular/fire/firestore"
import { environment } from "~/environments/environment"
import { IndexComponent } from "./pages/index/index.component"
import { register } from "swiper/element/bundle"
import { NavbarComponent } from "./components/navbar/navbar.component"

// Register Swiper elements
register()

@NgModule({
  declarations: [AppComponent, IndexComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseOptions)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
