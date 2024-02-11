import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-counter-object',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './counter-object.component.html',
})
export class CounterObjectComponent implements OnInit {

    public count = signal<{ value: number }>({
        value: 0
    });

    public doubleCount = computed(() => this.count().value * 2);

    ngOnInit() {
        effect(() => this.logMethod());
    }

    logMethod() {
        console.log('count changed to:', this.count().value)
    }

    updateCount() {
        this.count.update((v) => ({ value: v.value + 1 }))
        
    }
}