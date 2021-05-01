import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProductsSrvice {
    private columnsListener = new BehaviorSubject<any[]>([]);
    private subHeadersListener = new BehaviorSubject<any[]>([]);
    private dataListener = new BehaviorSubject<any[]>([]);

    get columns$() {
        return this.columnsListener.asObservable();
    }

    get subHeaders$() {
        return this.subHeadersListener.asObservable();
    }

    get data$() {
        return this.dataListener.asObservable();
    }

    constructor(private http: HttpClient) {
        this.loadData()
    }

    loadData() {
        this.http.get("assets/potato_sales.json")
            .subscribe((res: any) => {
                const subHeaders = res.column
                    .filter(x => x.subHeaders?.length > 0)
                    .reduce((acc, curr) => {
                        return [...acc, ...curr.subHeaders];
                    }, []);

                const _data = res.data
                    .map(x => {
                        x['Total sales'] = x.salesQ1 + x.salesQ2 + x.salesQ3 + x.salesQ4;
                        return x;
                    });

                this.columnsListener.next(res.column);
                this.subHeadersListener.next(subHeaders);
                this.dataListener.next(_data);
            });
    }

    saveProduct(newProduct: any) {
        const oldProducts = this.dataListener.getValue();
        const products = [...oldProducts, newProduct];
        this.dataListener.next(products);
    }
}