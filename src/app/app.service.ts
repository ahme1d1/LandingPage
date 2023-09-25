import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'https://graph.facebook.com/v18.0';
  private clientId = '1032352614616217';
  private clientSecret = '4a41518004854a43bc536f919ffef93e';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}client/home_page`)
  }

  exchangeShortTokenForLongToken(shortToken: string): Observable<any> {
    const params = new HttpParams()
      .set('grant_type', 'fb_exchange_token')
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
      .set('fb_exchange_token', "EAAOq61LgjJkBO05RJAZAkUCbPcr0TmPZC0q3dUfnmFqGQ7k9QjfVgE3X57UOaswOnnI1QIwwft1gw0yH35xYZBTpzThN66nAfpkaRmvH1l5ZBBbNdnj5AaARv9DWnXdnHvUeKZCM0NJDZBjQ2OT8XPrxBT2TO1cg3y6yZASfMIZAzH62Sx1wmlucRESx");

    return this.http.get(`${this.apiUrl}/oauth/access_token`, { params });
  }

  // getUserStories(): Observable<any> {
  //   const accessToken = 'EAAMD633TihIBOz4hnPzsp2ZAfx2yMNZA66oRxG8bkt9snYRYvMmN1JyeBZAfS3ZCZAeiCrFy5b7MqTLr4kAKQ84WN75jhQYkmVLA2tzAbVareTCtpSdQipVsBiInHsxkYGbRIsl4FE0GWxVRlqFkYurBjyr8MV1McnzZB7M5ZAKHvtMWQ1LV7tYLkPqPQAT9XWE9OOfALKWfidMZAtqb7LiK7CqfvoDX9ZAsydNwrTTttgZAYZD';
  //   const fields = 'id,media_type,media_url,thumbnail_url,permalink,timestamp';

  //   const params = {
  //     access_token: accessToken,
  //     fields,
  //   };

  //   return this.http.get<any>(`${this.apiUrl}/17841459270874529/stories`, { params });
  // }

  getUserReels(): Observable<any> {
    const shortLivedAccessToken = 'EAAOq61LgjJkBO41ZCHvwHZCJZASbA3rlXiGXEjJvVQkfQtdymQrky759fLaOyfEmj7g2dwiKtlDXoPAItHAM55FQKHyNrdZCsPdKcLZBfCD0hXpZAKTDdJYiSLWWj5ws6feRZBbk78ApVYwGxh6E5YBTXE4fxJZC5SZBq7HVm7wJHNI7hCyk5OkyN2KV20n5yOSilpsxnpDnXvrNdsEAQ3tZCUY8Ufet5H';
    const userId = '17841414859636830'; // Replace with your Instagram business account ID
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
