class RestUtil {
    
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    get(url) {
      return fetch(`${this.baseUrl}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
  
    post(url, body) {
      return fetch(`${this.baseUrl}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((response) => response.json());
    }
  
    put(url, body) {
      return fetch(`${this.baseUrl}${url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((response) => response.json());
    }
  
    delete(url) {
      return fetch(`${this.baseUrl}${url}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
  }
  
export default RestUtil;