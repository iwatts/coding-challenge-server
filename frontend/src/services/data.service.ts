import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class DataService {

	private API_LOCALHOST: string = "http://localhost:5001";
	private API_LOCALKEY: string = "abrradiology";
	private readonly headers = new HttpHeaders().set(
		"content-type",
		"application/json"
	);
	constructor(private http: HttpClient) { }

	// TODO: this should be loaded into the state so that it doesn't have to make multiple calls
	// Add RXJS later to make this call one time and then use the state to populate components with data
	getAllFish(): Observable<any[]> {
		const reqQuery = { apikey: this.API_LOCALKEY }
		return this.http
			.get<any[]>(`${this.API_LOCALHOST}/gofish`, { headers: this.headers, params: reqQuery })
			.pipe(
				map(res => ({ fishList: res })),
				catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse): Observable<any> {
		let errorMessage = `Failed: `;

		console.error(errorMessage, error);
		return throwError(errorMessage);
	}
}
