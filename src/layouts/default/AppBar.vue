<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl" href="/">MtF.im</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a href="/subdomain">{{ $t("appbar.subdomain") }}<span class="indicator-item badge">{{ $t("appbar.developing") }}</span></a></li>
                <li><a>{{ $t("appbar.email") }}<span class="indicator-item badge">{{ $t("appbar.notavliable") }}</span></a></li>
                <li><a>{{ $t("appbar.space") }}<span class="indicator-item badge">{{ $t("appbar.notavliable") }}</span></a></li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>