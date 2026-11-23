export const sites = ['Puerto Vallarta', 'ITESO', 'Periférico', 'Tijuana'] as const

export type SiteName = (typeof sites)[number]

export interface AppOutletContext {
  selectedSite: SiteName
}
