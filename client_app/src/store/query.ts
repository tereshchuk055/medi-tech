export function apiRequest(urlParams: string, method: string = "GET", payload?: object) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMjQwNjIzLCJpYXQiOjE3MDIyMzc2MjMsImp0aSI6ImRiYjRjODI3M2E5NTQ3NDdhZDFkMWRkYzg3YTY4ZjJiIiwidXNlcl9pZCI6MSwiY3JlYXRlX3RpbWUiOiIyMDIzLTEyLTEwIDIxOjQ3OjAzIiwidXNlcl9lbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImZpcnN0X25hbWUiOiJ1c2VyMSIsImxhc3RfbmFtZSI6IiIsInVzZXJfYmlydGhkYXRlIjoiMTkwMC0wMS0wMSIsInVzZXJfc2V4IjoiIiwidXNlcl9waG9uZSI6IiIsImRhdGVfam9pbmVkIjoiMjAyMy0xMS0xMyAxODowODozMyIsInBlcm1pc3Npb25zX2xldmVsIjoxNSwiaXNfc3VwZXJ1c2VyIjp0cnVlLCJpc19zdHVmZiI6dHJ1ZX0.3ZR7cvAuMUmcUaV7d5kBm-FOlB12iZwaeikRNMU5y6o" //TODO Get token from cookie
    const url = `http://127.0.0.1:8000/${urlParams}`

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (!response.ok)
                throw new Error(`Request failed with status: ${response.status}`);

            return response.json();
        })
        .then((data) => {
             console.log(data) 
        })
        .catch((err) => {
            console.log("ERROR:", err.message);
        });
}
