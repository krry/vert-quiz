<script>
	import { fade } from 'svelte/transition';
	export let answer1, answer2, answer3, answer4, answer5;

	/** @type {import('./$types').ActionData} */
	export let form = {};
</script>

<h2>Introversion/Extroversion Test</h2>
{#if form?.taken}
	<div transition:fade>
		<h1 name="result">
			You are likely feeling
			{#if form?.score > 2}
				<span>extroverted</span>
			{:else}
				<span>introverted</span>
			{/if}
		</h1>
		<div class="button-case">
			<button type="submit" on:click={() => (form.taken = false)}>Take again</button>
		</div>
	</div>
{:else}
	<div transition:fade>
		<form method="post" role="form">
			<label for="question1">
				<h3>Do you like parties?</h3>
				<select name="question1" id="question1" bind:value={answer1}>
					<option value="0">No</option>
					<option value="1">Yes</option>
				</select>
			</label>
			<label for="question2">
				<h3>Do you like singing with friends?</h3>
				<select name="question2" id="question2" bind:value={answer2}>
					<option value="0">No</option>
					<option value="1">Yes</option>
				</select>
			</label>
			<label for="question3">
				<h3>Do you like dancing in public?</h3>
				<select name="question3" id="question3" bind:value={answer3}>
					<option value="0">No</option>
					<option value="1">Yes</option>
				</select>
			</label>
			<label for="question4">
				<h3>Do you like talking with groups of friends?</h3>
				<select name="question4" id="question4" bind:value={answer4}>
					<option value="0">No</option>
					<option value="1">Yes</option>
				</select>
			</label>
			<label for="question5">
				<h3>Do you prefer solo or multiplayer games?</h3>
				<select name="question5" id="question5" bind:value={answer5}>
					<option value="0">Solo</option>
					<option value="1">Multiplayer</option>
				</select>
			</label>
			<div class="button-case">
				<button type="submit" name="test-submit">Submit Answers</button>
			</div>
		</form>
	</div>
{/if}

<style>
	.button-case {
		margin: 1rem 0;
		text-align: right;
	}
	h3 {
		margin-bottom: 0.5rem;
	}
</style>
