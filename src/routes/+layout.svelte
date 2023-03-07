<script>
    // import '@picocss/pico';
    import '../app.postcss';
    import '../app.scss';
    // import '../custom.css';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link href="https://fonts.bunny.net/css?family=fredoka:300,400,500,600,700|open-sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i|space-grotesk:300,400,500,600,700" rel="stylesheet">
</svelte:head>

<slot />