const HttpFilter = function (acceptedDomains, matchType) {
    window.matchType = matchType;
    window.acceptedDomains = acceptedDomains;
};

const extractHostname = function (url) {
    let hostname;

    // find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
};

const canSendRequest = function (hostname) {
    if (window.matchType === 'exact') {
        return window.acceptedDomains.indexOf(hostname) > -1;
    } else {
        return !!window.acceptedDomains.find(d => d.includes(hostname))
    }
};

XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
    const hostname = extractHostname(url);

    if (canSendRequest(hostname)) {
        // send request
        open.call(this, method, url, async, user, pass);
    } else {
        // log error end throw exception
        const message = `hostname: "${hostname}" blocked from http filter`;
        console.error(message);
        throw new Error(message);
    }
};
