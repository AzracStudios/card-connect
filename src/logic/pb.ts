import PocketBase from 'pocketbase';
const API = 'https://interactive-ink.pockethost.io';
const pb = new PocketBase(API);

export async function get_card_info(id: string): Promise<object> {
	const card = await pb.collection('cards').getOne(id);

	return {
		id: card.id,
		company: card.company,
		dob: card.dob,
		name: card.name,
		position: card.position,
		sex: card.sex,
		socials: card.socials,
	};
}

export async function get_cards(): Promise<object> {
	const cards = await pb.collection('cards').getFullList();
	return cards;
}

export async function create_card(data): Promise<object> {
	await pb.collection('cards').create(data);
}
