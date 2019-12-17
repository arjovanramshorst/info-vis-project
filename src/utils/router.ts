export const basename = 'info-vis-project'

export const url = (url: string) => (window.location.hostname.startsWith('localhost') ? url : `/${basename}${url}`)
