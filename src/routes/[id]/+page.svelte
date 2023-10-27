<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { get_card_info } from '../../logic/pb';

	let info:any = null;
	$: info;

	onMount(async () => {
		info = await get_card_info($page.params.id);
	});
</script>

{#if info}
<div class="display_page">
	<div class="image">
		<img src="/dude_pic 1.png"alt="" />
	</div>

    <div class="data">
        <p class="name">{info.name}</p>
        <div class="company">
            <p>{info.position}</p>
            <p>{info.company}</p>
        </div>
    </div>

    <div class="sec_data">
        <div class="container">
            <p>Sex</p>
            <p class="info">{info.sex}</p>
        </div>
        <div class="container">
            <p>DOB</p>
            <p class="info" >{info.dob}</p>
        </div>
    </div>

    <div class="socials">
        <p>Socials</p>
        <p class="info">{info.socials.email}</p>
        <p class="info">{info.socials.phone}</p>
    </div>

</div>
{/if}

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.display_page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
        align-items: center;

        .socials {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90vw;
            margin-top: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

            p {
                
                font-size: 1.2rem;
            }

            .info {
                font-size: 1.5rem;
            }
        }

        .sec_data {
            width: 100%;
            display: flex;
            margin-top: 2rem;
            padding-inline: 5vw;
            gap: 1rem;
            align-items: center;

            .container {
                width: 50%;
                height: 5rem;
                border-radius: 0.5rem;
                box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                p {
                    font-size: 1rem; 
                }

                .info {
                    font-size: 1.5rem;
                }
            }
        }

		.image {
            height:50vh;
            width: 90vw;
            margin-top: 1rem;
            overflow:hidden;
            display:flex;
            align-items: center;
            border-radius: 1rem;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
			
            img {
                width: 100%;
            }
		}

        .name {
            font-size: 2rem;
            font-weight: bold;
        }

        .company {
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }

        .data {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
	}
</style>
