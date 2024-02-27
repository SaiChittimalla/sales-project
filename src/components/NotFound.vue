<template>
    <div class=" d-flex  justify-content-center  align-items-center ">
        <div>
            <img src="../assets/Notfound.gif" alt="" class=" img-fluid ">
            <div class=" text-center ">

                <router-link to="/HomePage">
                    <h6>Go to Home</h6>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data() {
        return {

        }
    }

}
</script>

<style  scoped></style>