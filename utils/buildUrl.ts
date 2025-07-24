export function buildUrl(base: string, path: string, params?: Record<string, any>) {
    // 去除base结尾/，path开头/
    base = base.replace(/\/+$/, '')
    path = path.replace(/^\/+/, '')
    const url = `${base}/${path}`
    if (params) {
        const search = new URLSearchParams(params).toString()
        return search ? `${url}?${search}` : url
    }
    return url
}