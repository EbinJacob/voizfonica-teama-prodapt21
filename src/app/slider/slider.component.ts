import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import KeenSlder from 'keen-slider'
import { KeenSliderPlugin } from 'keen-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() slides: {text: string, color: string}[]
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;

  slider: any = null
  interval: any = null

  ngAfterViewInit(){
    this.slider = new KeenSlder(this.sliderRef.nativeElement,)
    this.interval = setInterval(this.slider.next, 2000)
  }

  ngOnDestroy(){
    if(this.slider) this.slider.destroy()
    clearInterval(this.interval)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
