function detectMIMEType(url) {
    const match = url.match(/\.([^.]+)$/);
    let typeData = ""
    if (match) {
        const extension = match[1];
        if (extension === 'html') {
            typeData = "text/html;charset=utf-8"
        } else if (extension === 'css') {
            typeData = "text/css"
        } else if (extension === 'js') {
            typeData = "application/javascript"
        } else if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif'].includes(extension)) {
            typeData = `image/${extension}`
        } else if (['mp4', 'webm'].includes(extension)) {
            typeData = `video/${extension}`
        } else {
            typeData = `application/${extension}`;
        }
    } else {
        console.log('URL tidak memiliki ekstensi');
    }
    return typeData
}

async function fetchUrl(url) {
    const response = await fetch(url);
    if (response.status === 404) {
        return response;
    } else {
        return await response.blob();
    }
}

async function handleRequest(req: Request) {
    const url = new URL(req.url);
    const path = url.pathname;
    let githubURL = "https://raw.githubusercontent.com/iansyahr/mimo/main" //url
    let githubDenoPath = githubURL + path
    let indexURL = githubDenoPath + (path.match(/\.[0-9a-z]+$/i) ? "" : "/index.html");
    let mimeType = detectMIMEType(indexURL)
    let fetchGithubUrl = await fetchUrl(indexURL)
    if (fetchGithubUrl.status === 404) {
        return new Response("404 : Why are you here?");
    } else {
        return new Response(fetchGithubUrl,{headers: {"content-type": `${mimeType}`}, status:200})
    }
}

Deno.serve(handleRequest);
