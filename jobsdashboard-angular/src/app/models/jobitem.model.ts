export interface JobItem {
	_id: string
	slug: string
	id: string
	epoch: number
	date: string
	company: string
	company_logo: string
	position: string
	tags: string[]
	logo: string
	description: string
	location: string
	salary_min: number
	salary_max: number
	url: string
	apply_url: string
}