export function getBrowserName() {
    const userAgent = navigator.userAgent
    if (userAgent.includes("Edg/")) return "Edge"
    if (userAgent.includes("Chrome/")) return "Chrome"
    if (userAgent.includes("Firefox/")) return "Firefox"
    if (userAgent.includes("Safari/") && !userAgent.includes("Chrome")) return "Safari"
    return 'Browser'
}
