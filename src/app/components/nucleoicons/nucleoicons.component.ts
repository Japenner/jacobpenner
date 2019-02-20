import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-nucleoicons',
    templateUrl: './nucleoicons.component.html',
    styleUrls: ['./nucleoicons.component.scss']
})
export class NucleoiconsComponent implements OnInit, OnDestroy {

    constructor( private element: ElementRef) {}

    ngOnInit() {
        const navbar = document.getElementsByTagName('app-navbar')[0].children[0];

        navbar.classList.remove('navbar-transparent');
    }

    ngOnDestroy() {
        const navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    }
}
