function detectMIMEType(type) {
    let typeData = ""
    if (type) {
        const extension = type;
        if (extension === 'html') {
            typeData = "text/html;charset=utf-8"
        } else if (extension === 'txt'){
            typeData = "text/plain"
        } else if (extension === 'css') {
            typeData = "text/css"
        } else if (extension === 'js') {
            typeData = "application/javascript"
        } else if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif'].includes(extension)) {
            typeData = `image/${extension}`
        } else {
            typeData = `application/${extension}`;
        }
    } else {
        console.log('URL tidak memiliki ekstensi');
    }
    return typeData
}

async function handleRequest(req: Request) {
    const url = new URL(req.url); //url example : https://example.com/?tp=txt#<Unicode string here>
    const data = url.hash.substring(1);
    const typeValue = url.searchParams.get('tp')
    const mimeType = detectMIMEType(typeValue)
    const decompress = decompressBrotli(data)
    const error = "Input type first"
    if (typeValue) {
        return new Response(decompress,{headers: {"content-type": `${mimeType}`}, status:200});
    } else {
        return new Response(error,{headers: {"content-type": "text/plain"}, status:404})
    }
}

Deno.serve(handleRequest);
