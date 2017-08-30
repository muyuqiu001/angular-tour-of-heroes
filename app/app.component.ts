import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/heroes">查看已经报名的人员</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = '周末足球报名系统';
}