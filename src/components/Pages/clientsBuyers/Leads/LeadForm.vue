<template>
    <div>
        <nav class="navbar navigated">
            <div class=" container ">
                <router-link to="/addleads" class=" text-decoration-none ">
                    <h4 class="back-to"><i class="bi bi-arrow-left ps-3"></i> New Lead</h4>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.back-to {
    color: #111;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.navigated {
    border-bottom: 1px solid #EEE;
    position: sticky;
    z-index: 10;
    top: 0;
    background-color: white;
}
</style>