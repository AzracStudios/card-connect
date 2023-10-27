<script lang="ts">
	import { goto } from '$app/navigation';
	export let card_name: String;
    export let card_company: String;
	export let card_id: String;
</script>

<div class="card_display">
    <div class="data">
        <p class="name">{card_name}</p>
        <p class="company">{card_company}</p>
    </div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="card_view"
		on:click={() => {
			goto(`/${card_id}`);
		}}
	>
		<svg
			width="24"
			height="24"
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
			><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg
		>
	</div>
</div>


<style lang="scss">
    .card_display {
        width: 95vw;
        margin-inline: auto;
        border-radius: 1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1rem;
        padding-block: 1rem;

        .data {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }

        .name {
            font-size: 1.5rem;
        }

        .company {
            font-size: 1.2rem;
        }
    }
</style>
