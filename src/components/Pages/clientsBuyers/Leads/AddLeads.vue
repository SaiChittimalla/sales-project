<template>
    <div>
        <nav class="navbar navigated">
            <div class=" container ">
                <router-link to="/Homepage" class=" text-decoration-none ">
                    <h4 class="back-to"><i class="bi bi-arrow-left ps-3"></i> New Lead</h4>
                </router-link>
            </div>
        </nav>
        <div class=" d-flex  justify-content-center ">
            <div class="p-4">
                <h2 class="lead-heading mt-3 ">
                    It’s easy to create lead with very few steps.
                </h2>
                <div class="card mt-5  all-cards">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-sm-10 title-div">
                                <h3><span>1</span>&nbsp;Enter lead’s personal details</h3>
                                <p class="card-para">These particulars are indispensable for the ease of identifying leads
                                    during later stages
                                    of sales.</p>
                            </div>
                            <div class=" col-lg-2 col-md-2 col-sm-2 img-div">
                                <div class="image-center">
                                    <img src='../../../../assets/idcardofwomaninglasses.svg' alt="" class=" img-fluid ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-5  all-cards">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-sm-10 title-div">
                                <h3><span>2</span>&nbsp;Lead Source
                                    <span class=" optional"> (optional)</span>
                                </h3>
                                <p class="card-para">Define the Lead Type (Client, Partner, Consultant) and Disclose the
                                    Source (Mail, Advertisement,Call)</p>
                            </div>
                            <div class=" col-lg-2 col-md-2 col-sm-2 img-div">
                                <div class="image-center">
                                    <img src='../../../../assets/Group 237650.svg' alt="" class=" img-fluid ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mt-5  all-cards">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-sm-10 title-div">
                                <h3><span>3</span>&nbsp;Request
                                    <span class="optional"> (optional)</span>
                                </h3>
                                <p class="card-para">Defines the underlying purpose driving the lead's request.</p>
                            </div>
                            <div class=" col-lg-2 col-md-2 col-sm-2 img-div">
                                <div class="image-center">
                                    <img src='../../../../assets/Friendrequestaccepted.svg' alt="" class=" img-fluid ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" d-flex started-div   justify-content-center ">
                <router-link to="/leadform" class=" text-decoration-none "> <button type="button" class="Getstart">
                        Get started
                    </button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            this.$router.push({ name: 'LoginPage' })
        }
    }
}
</script>

<style  scoped>
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

.lead-heading {
    color: #111;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px;

}

.card-para {
    color: #999;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    padding-left: 20px;

}

.image-center {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.all-cards {
    border-bottom: 1px solid#EEE !important;
    border: none;
}

.Getstart {
    display: flex;
    width: 366px;
    height: 42px;
    padding: 8px 17px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #3B43F9;
    color: #FFF;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;


}

.started-div {
    background-color: #fff;
    width: 100%;
    padding: 20px 0px;
    position: fixed;
    bottom: 0px;
}

.optional {
    color: #999;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media (max-width:575px) {
    .title-div {
        width: 80%;
    }

    .img-div {
        width: 20%;
    }
}

@media(min-width: 575px) and (max-width: 2560px) {
    .all-cards {
        width: 565px;
    }
}
</style>