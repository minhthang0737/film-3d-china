import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class HeaderTitleService implements OnInit {
    ngOnInit(): void {
        
    }

    private static title = new BehaviorSubject('Film3dChina');

    public static getTitle(): Observable<string> {
        return this.title;
    }

    public static setTitle(customTitle: string): void {
        this.title.next(customTitle);
    }
}