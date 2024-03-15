<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<svelet:head>
	<title>PalsVsPokemon</title>
</svelet:head>

<slot />
