<script>
    import { page } from '$app/stores';
</script>

<div class="container">
    <h1>Uups!</h1>
    <h3>
        <p>{ $page.error?.message }</p>
    </h3>
</div>