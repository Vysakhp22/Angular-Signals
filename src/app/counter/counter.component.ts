import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {

  public count = signal(0);
  public doubleCount = computed(() => this.count() * 2);
  private t = effect(() => this.logMethod());

  constructor() { }

  ngOnInit() {
  }

  logMethod() {
    console.log('count changed to:', this.count())
  }

  updateCount() {
    this.count.set(this.count() + 1);
  }

}
