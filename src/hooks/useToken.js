

export const useToken = (token) => {
    if (!token)return
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    let payload=JSON.parse(jsonPayload);
    const date=  Date.now()

    return (Math.ceil(payload.exp-date/1000))

};

