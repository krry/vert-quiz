<script>
	import '../styles/native.css';
</script>

<section>
	<slot />
</section>

<style>
	section {
		font-family: system-ui;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		overflow-y: auto;
	}
	:global(.button) {
		display: inline-block;
		width: fit-content;
		cursor: pointer;
		margin: 1rem 0;
		padding: 0.61em 1em;
		background: hsl(28, 100%, 61%);
		text-decoration: none;
		color: white;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		border: 1px solid white;
		border-radius: 0.5em;
	}
</style>
