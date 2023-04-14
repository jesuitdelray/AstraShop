export function deleteQueryParams(key: string) {
    const url = new URL(window.location.href)
    url.searchParams.delete(key)
    const newUrl = url.pathname + url.search
    window.history.pushState({ path: newUrl }, "", newUrl)
}
