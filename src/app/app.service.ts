import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'https://graph.facebook.com/v17.0';
  private clientId = '848734893345298';
  private clientSecret = '4d12d9fa7413096367b07a3f4300602a';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}client/home_page`)
  }

  exchangeShortTokenForLongToken(shortToken: string): Observable<any> {
    const params = new HttpParams()
      .set('grant_type', 'fb_exchange_token')
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
      .set('fb_exchange_token', shortToken);

    return this.http.get(`${this.apiUrl}/oauth/access_token`, { params });
  }

  getUserStories(): Observable<any> {
    const accessToken = 'EAAMD633TihIBOz4hnPzsp2ZAfx2yMNZA66oRxG8bkt9snYRYvMmN1JyeBZAfS3ZCZAeiCrFy5b7MqTLr4kAKQ84WN75jhQYkmVLA2tzAbVareTCtpSdQipVsBiInHsxkYGbRIsl4FE0GWxVRlqFkYurBjyr8MV1McnzZB7M5ZAKHvtMWQ1LV7tYLkPqPQAT9XWE9OOfALKWfidMZAtqb7LiK7CqfvoDX9ZAsydNwrTTttgZAYZD';
    const fields = 'id,media_type,media_url,thumbnail_url,permalink,timestamp';

    const params = {
      access_token: accessToken,
      fields,
    };

    return this.http.get<any>(`${this.apiUrl}/17841459270874529/stories`, { params });
  }

  getUserReels(): Observable<any> {
    const shortLivedAccessToken = 'EAAMD633TihIBOygmrlHQUjXomIYxdohQzoCj4mVBtOPixBSRpHMA7wVCm7uOT16TyyNVvYjPQGKxuE7UjreH1ADzQMa66REI2175i2ZCcBiJR7AV38d15CHT9IB5dcuMTdgMwPp2viZBZAj7fhiNZCcCKFPTCqeQBCqoLwZCiNpZBMUntfiazBSBjcXJJP9lyAJeu1Uew48bjHSiO57ZAbuKRvVfTQZD';
    const userId = '17841459270874529'; // Replace with your Instagram business account ID
    const fields = 'id,media_type,media_url,thumbnail_url,permalink,timestamp,caption';

    return this.exchangeShortTokenForLongToken(shortLivedAccessToken).pipe(
      mergeMap((response) => {
        const longLivedAccessToken = response.access_token;
        const params = new HttpParams()
          .set('access_token', longLivedAccessToken)
          .set('fields', fields);

        return this.http.get<any>(`${this.apiUrl}/${userId}/media`, { params });
      })
    );
  }

  createContact(contact: any): Observable<any> {
    const formData = new FormData();
    formData.append('name', contact.name)
    formData.append('email', contact.email)
    formData.append('phone', contact.phone)
    formData.append('content', contact.content)

    return this.http.post<any>(`${environment.apiUrl}client/form_message`, formData)
  }
}
