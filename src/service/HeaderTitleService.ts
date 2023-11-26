import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class HeaderTitleService implements OnInit {
    ngOnInit(): void {
        
    }

    private static title = new BehaviorSubject('Film3dChina');
    private static plugfilm = new BehaviorSubject('');

    public static getTitle(): Observable<string> {
        return this.title;
    }

    public static setTitle(value: string): void {
        this.title.next(value);
    }

    public static getPlugfilm(): Observable<any> {
        return this.plugfilm;
    }
    public static setPlugfilm(value: any): void {
        this.plugfilm.getValue() != value ? this.plugfilm.next(value) : null;
    }
}