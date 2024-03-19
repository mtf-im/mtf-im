<template>
    <div>
        <!-- Appbar content -->
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl" href="/">MtF.im</a>
            </div>
            <div class="flex-none">
                <!-- Navbar items for large screens -->
                <ul class="menu menu-horizontal p-0 hidden lg:flex">
                    <li><a href="/subdomain">{{ $t("appbar.subdomain") }}<span class="indicator-item badge">{{ $t("appbar.developing") }}</span></a></li>
                    <li><a>{{ $t("appbar.email") }}<span class="indicator-item badge">{{ $t("appbar.notavliable") }}</span></a></li>
                    <li><a>{{ $t("appbar.space") }}<span class="indicator-item badge">{{ $t("appbar.notavliable") }}</span></a></li>
                </ul>
                <!-- Drawer toggle button for small screens -->
                <label for="my-drawer" class="btn btn-square btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="inline-block w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </label>
            </div>
        </div>

        <!-- Teleport drawer (sidebar) to body for small screens -->
        <Teleport to="body">
            <div class="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <div class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content min-h-screen">
                        <!-- Sidebar content for small screens -->
                        <ul>
                            <li><a href="/subdomain">{{ $t("appbar.subdomain") }}<span class="indicator-item badge">{{ $t("appbar.developing") }}</span></a></li>
                            <li><a>{{ $t("appbar.email") }}<span class="indicator-item badge">{{ $t("appbar.notavliable") }}</span></a></li>
                            <li><a>{{ $t("appbar.space") }}<span class="indicator-item badge">{{ $t("appbar.notavliable") }}</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script>
export default {
    // Your component logic here
}
</script>
