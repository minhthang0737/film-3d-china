import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

    public async get<T> (url: string, data?: any, options?: any) {
        try {
            const urlBuild = this.buildURL(url, data)
            const response = await fetch(urlBuild);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const dataresp = await response.json();
            return dataresp as T;
        } catch (error: any) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }

    public async post<T> (url: string, data?: any, options?: any) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...options
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const dataresp = await response.json();
            return dataresp as T;
        } catch (error: any) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }

    buildURL(url: string, data: any) {
        if (url == '' || url == undefined || url == null)
        throw new Error("URL is empty.");
        const urlBuild = new URL(url);
        for (const key in data) {
            urlBuild.searchParams.append(key, data[key])
        }
        return urlBuild.toString();
    }
}