<script lang="ts">
	import { Value } from 'sass';
	import { create_card } from '../../logic/pb';
	import { goto } from '$app/navigation';

	let name: string;
	$: name;

	let position: string;
	$: position;

	let company: string;
	$: company;

	let sex: string;
	$: sex;

	let dob: string;
	$: dob;

	let socials = { email: '', phone: '' };

	let file_field: any;

	const upload_card = async () => {
		if (
			name == '' ||
			company == '' ||
			sex == '' ||
			dob == '' ||
			position == '' ||
			socials.email == '' ||
			socials.phone == ''
		)
			return alert('Fill all the fields!');

		await create_card({ name, position, company, sex, dob, socials });
		alert('Card Created!');
		goto('/');
	};
</script>

<div class="container">
	<h2 style="margin-top: 1rem;">Add A Card</h2>

	<div class="input_block">
		<p>Name</p>
		<input
			type="text"
			on:input={(e) => {
				name = e.target.value;
			}}
		/>
	</div>

	<div class="input_block">
		<p>Company</p>
		<input
			type="text"
			on:input={(e) => {
				company = e.target.value;
			}}
		/>
	</div>

	<div class="input_block">
		<p>Position</p>
		<input
			type="text"
			on:input={(e) => {
				position = e.target.value;
			}}
		/>
	</div>

	<div class="input_block">
		<p>Sex</p>
		<input
			type="text"
			on:input={(e) => {
				sex = e.target.value;
			}}
		/>
	</div>

	<div class="input_block">
		<p>DOB</p>
		<input
			type="text"
			on:input={(e) => {
				dob = e.target.value;
			}}
		/>
	</div>

	<div class="input_block">
		<p>Email</p>
		<input
			type="text"
			on:input={(e) => {
				socials.email = e.target.value;
			}}
		/>
	</div>

	<div class="input_block">
		<p>Phone</p>
		<input
			type="text"
			on:input={(e) => {
				socials.phone = e.target.value;
			}}
		/>
	</div>

	<button
		on:click={() => {
			upload_card();
		}}>Create</button
	>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.input_block {
		p {
			font-size: 1rem;
			margin-bottom: 0.5rem;
			font-weight: 500;
		}

		input[type='text'] {
			padding: 0.5rem;
			font-size: 1.2rem;
			outline: none;
			border: none;
			border-radius: 0.5rem;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.493);
		}

		margin-bottom: 1rem;
	}

	button {
		padding: 0.5rem;
		font-size: 1.2rem;
		outline: none;
		border: none;
		background: #9b2ece;
		color: white;
		border-radius: 0.2rem;
	}
</style>
