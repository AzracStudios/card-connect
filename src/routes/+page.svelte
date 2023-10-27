<script lang="ts">
	import { onMount } from 'svelte';
	import CardDisplay from '../components/card_display.svelte';
	import { get_cards } from '../logic/pb';
	import { goto } from '$app/navigation';

	let cards: any = null;
	$: cards;

	onMount(async () => {
		cards = await get_cards();
	});
</script>

<div class="container">

    <img src="/logo.png" alt="logo" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="add_card"
        on:click={() => {
            goto('/add');
        }}
    >
        <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                fill-rule="nonzero"
            /></svg
        >
        <p class="add_card_text">Add Card</p>
    </div>
    
    {#if cards}
        {#each cards as card}
            <CardDisplay card_name={card.name} card_id={card.id} card_company={card.company} />
        {/each}
    {/if}
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 80vw;
        
    }

	.add_card {
		width: 95vw;
		height: 20vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		background: #9b2ece;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		margin-inline: auto;
        margin-bottom: 5vw;

		svg {
			width: 20%;
			fill: white;
		}

		.add_card_text {
			font-size: 2rem;
			color: white;
		}

		transition: 0.1s background;
	}
</style>
