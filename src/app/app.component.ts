import { isPlatformBrowser } from "@angular/common"
import { Component, Inject, PLATFORM_ID } from "@angular/core"

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent {
  title = "takidev-angular"
  isBrowser: boolean = false

  /**
   * Injects the platform ID to determine whether the app is running in the browser or on the server.
   * @param platformId The platform ID.
   * @description i don't know how it's work
   * @see https://stackoverflow.com/questions/73132643/how-to-use-localstorage-on-angular-when-enabling-ssr
   *
   */
  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId)
  }

  ngOnInit() {
    if (this.isBrowser) this.checkLocalTheme()
  }

  checkLocalTheme() {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
    }
  }
}
