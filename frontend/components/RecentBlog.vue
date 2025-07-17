<template>
    <!-- main height -->
    <div class="h-[100vh] w-full flex">
        <!-- left side  -->
        <div class="h-full w-[50%]  flex flex-col gap-2 pl-20 py-2 cursor-pointer">
            <h1 class="text-3xl  ">Latest News</h1>
            <!-- yha se box start  -->
            <div class="h-full w-[35vw] rounded-2xl pb-5 overflow-hidden shadow-md">
                <div class="h-[65%] ">
                    <img class="h-full w-full"
                        src="https://img.freepik.com/free-vector/sharing-articles-concept-illustration_114360-5517.jpg"
                        alt="">
                </div>
                <div class="flex flex-col h-full gap-2 p-3">
                    <!-- {{ singlePage1.singlePageData }} -->
                    <p class="text-gray-400 ">{{ singlePage1.singlePageData?.title || "Loading..." }}</p>
                    <h1 class="font-semibold text-lg">{{ singlePage1.singlePageData?.title }}</h1>
                    <p class="text-sm">{{ singlePage1.singlePageData?.body }} </p>
                    <p class="text-md">{{ singlePage1.singlePageData?.views }} views</p>
                    <p><i class="ri-heart-line"></i> {{ singlePage1.singlePageData?.likes }}</p>

                </div>

            </div>
        </div>
        <div class=" h-full w-[50%] pt-11 px-4 flex flex-col overflow-y-scroll  gap-10">

            <RecentCard v-for="item in Data.slice(0, 10)" :key="item.id" :id="item.id" :title="item.title"
                :body="item.body" @id="singlePageSent" />

        </div>
    </div>

</template>
<script>
import RecentCard from './RecentCard.vue';
import { FetchedData } from "../store/dataFetching"
export default {
    components: {
        RecentCard
    },
    setup() {
        const singlePage1 = FetchedData()
        const singlePageSent = (id) => {
            singlePage1.singlePage(id)

            console.log(id)
        }

        singlePage1.singlePage(1);
        return {
            singlePage1,
            singlePageSent,

        }


    },

    props: {
        Data: {
            type: Array,
            required: false,
            default: () => []
        }
    }
}

</script>