export class HttpService<T> {
  constructor(private baseUrl: string) {}

  public async get(relativeUrl: string): Promise<T> {
    const result = await fetch(`${this.baseUrl}${relativeUrl}`);
    const json = await result.json();
    return json as unknown as T;
  }
}
