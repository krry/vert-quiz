<script>
	import { fade } from 'svelte/transition';
	let questions = [
		'I like parties.',
		'I like singing with friends.',
		'I like dancing in public.',
		'I like talking with groups of friends.',
		'I prefer multiplayer games.'
	];

	let max = 4;

	export let answers = ['0', '0', '0', '0', '0'];
	/** @type {import('./$types').ActionData} */
	export let form = { score: 0, taken: false, count: 0, keys: [], total: 0 };

	$: percent = (form?.score?.toFixed(2) ?? 0) * 100 + '%';
</script>

<h3>the -version test</h3>
{#if form?.taken}
	<h1 name="result">
		You are likely leaning toward
		{#if form?.score >= 0.5}
			<span>extroversion</span>
		{:else}
			<span>introversion</span>
		{/if}
	</h1>
	<div class="button-case">
		<div>{percent} extroverted</div>
		<button class="button" type="submit" on:click={() => (form.taken = false)}>test again</button>
	</div>
{:else}
	<div transition:fade>
		<form method="post" role="form">
			{#each questions as question, i}
				<label for={`question${i}`}>
					<h3>{question}</h3>
					<div class="row">
						<span>Not at all</span>
						<input
							type="range"
							name={`question${i}`}
							id={`question${i}`}
							bind:value={answers[i]}
							min="0"
							{max}
						/>
						<!-- <span>{answers[i]}</span> -->
						<span>Totally</span>
					</div>
				</label>
				<input type="hidden" name="max" value={max} />
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
