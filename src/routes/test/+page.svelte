<script>
	import { fade } from 'svelte/transition';

	let questions = [
		'Do you like parties?',
		'Do you like singing with friends?',
		'Do you like dancing in public?',
		'Do you like talking with groups of friends?',
		'Do you prefer multiplayer games?'
	];

	export let answers = ['0', '0', '0', '0', '0'];

	/** @type {import('./$types').ActionData} */
	export let form = { score: 0, taken: false };
</script>

<h3>the -version test</h3>
{#if form?.taken}
	<h1 name="result">
		You are likely leaning toward
		{#if form?.score > 2}
			<span>extroversion</span>
		{:else}
			<span>introversion</span>
		{/if}
	</h1>
	<div class="button-case">
		<button class="button" type="submit" on:click={() => (form.taken = false)}>test again</button>
	</div>
{:else}
	<div transition:fade>
		<form method="post" role="form">
			{#each questions as question, i}
				<label for={`question${i}`}>
					<h3>{question}</h3>
					<select name={`question${i}`} id={`question${i}`} bind:value={answers[i]}>
						<option selected value="0">No</option>
						<option value="1">Yes</option>
					</select>
				</label>
			{/each}
			<div class="button-case">
				<button type="submit" class="button" name="test-submit">Submit Answers</button>
			</div>
		</form>
	</div>
{/if}

<style>
	.button-case {
		margin: 1rem 0;
		text-align: center;
	}
	h3 {
		margin-bottom: 0.5rem;
	}
</style>
