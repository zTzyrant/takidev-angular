import { Component, ElementRef, ViewChild } from "@angular/core"
import { SwiperContainer } from "swiper/element"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.css",
})
export class IndexComponent {
  Navigator = ["home", "about", "stack", "project", "contact"]

  @ViewChild("swiper") swiper!: ElementRef<SwiperContainer>

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // first get the fragment from the URL and slide to it if it exists
    this.route.fragment.subscribe(fragment => {
      if (fragment && this.Navigator.includes(fragment)) {
        this.slideTo(fragment)
      }
      console.log(fragment)
    })
  }

  slideTo(menu: string) {
    this.Navigator.forEach((item, index) => {
      if (item === menu) {
        this.swiper.nativeElement.swiper.slideTo(index)
        return // early return if found the index
      }
    })
  }
}
